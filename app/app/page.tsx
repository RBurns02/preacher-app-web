"use client";

// The Preacher for Web — a read-only reader for your own sermons and
// services, from any computer. Signs in with the same account as the app and
// reads users/{uid}/sermons and users/{uid}/entries straight from Firestore;
// the security rules only ever let a signed-in, verified person read their
// own records.

import { useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { collection, getDocs, type DocumentData } from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

// ── Data ─────────────────────────────────────────────────────────────────────

type Segment = { kind: "text" | "ref" | "space"; value: string };
type Section = { label: string; segments: Segment[] };

type Sermon = {
  id: string;
  /** Lowercased title/scripture/series/outline, built once for search. */
  haystack: string;
  title: string;
  scriptures: string;
  notes: string;
  seriesName: string;
  updatedAt: number;
};

type Service = {
  id: string;
  haystack: string;
  message: string;
  place: string;
  time: number;
  scriptures: string;
  comments: string;
  crowdResponse: string;
  sermonCloudId: string;
  isOwnMessage: boolean;
  pastor: string;
};

const str = (v: unknown) => (typeof v === "string" ? v : "");
const millis = (v: unknown): number => {
  if (v && typeof v === "object" && "toMillis" in v) {
    return (v as { toMillis: () => number }).toMillis();
  }
  if (typeof v === "string") return Date.parse(v) || 0;
  return 0;
};

function toSermon(id: string, d: DocumentData): Sermon {
  return {
    id,
    haystack: [d.title, d.scriptures, d.seriesName, outlineText(str(d.notes))]
      .map(str).join(" ").toLowerCase(),
    title: str(d.title) || "Untitled sermon",
    scriptures: str(d.scriptures),
    notes: str(d.notes),
    seriesName: str(d.seriesName),
    updatedAt: millis(d.updatedAt),
  };
}

function toService(id: string, d: DocumentData): Service {
  return {
    id,
    haystack: [d.message, d.place, d.scriptures, d.pastor, outlineText(str(d.comments))]
      .map(str).join(" ").toLowerCase(),
    message: str(d.message),
    place: str(d.place),
    time: millis(d.time),
    scriptures: str(d.scriptures),
    comments: str(d.comments),
    crowdResponse: str(d.crowdResponse),
    sermonCloudId: str(d.sermonCloudId),
    isOwnMessage: d.isOwnMessage !== false,
    pastor: str(d.pastor),
  };
}

/** One outline point → its blocks. Mirrors segmentsFromNote() in the app
 *  (lib/core/utils/outline_segments.dart): the `segments` list when it has
 *  anything, otherwise the older scriptureTop / content / scripture fields. */
function segmentsOf(n: Record<string, unknown>): Segment[] {
  const segs: Segment[] = [];
  if (Array.isArray(n.segments)) {
    for (const raw of n.segments) {
      if (!raw || typeof raw !== "object") continue;
      const s = raw as Record<string, unknown>;
      if (s.t === "space") {
        segs.push({ kind: "space", value: "" });
        continue;
      }
      const v = str(s.v).trim();
      if (v) segs.push({ kind: s.t === "ref" ? "ref" : "text", value: v });
    }
    if (segs.length) return segs;
  }
  const refs = (x: string) => x.split(",").map((r) => r.trim()).filter(Boolean);
  let scripture = str(n.scripture).trim();
  let top = str(n.scriptureTop).trim();
  if (!top && (n.scriptureAbove === true || n.scriptureAbove === "true")) {
    top = scripture;
    scripture = "";
  }
  const content = str(n.content).trim();
  return [
    ...refs(top).map((r) => ({ kind: "ref" as const, value: r })),
    ...(content ? [{ kind: "text" as const, value: content }] : []),
    ...refs(scripture).map((r) => ({ kind: "ref" as const, value: r })),
  ];
}

/** The app's outline JSON → sections; null if the notes are plain text. */
function parseOutline(notes: string): Section[] | null {
  if (!notes.trim().startsWith("{")) return null;
  try {
    const j = JSON.parse(notes);
    if (j?.type !== "sermon_outline" || !Array.isArray(j.notes)) return null;
    // Skip anything malformed instead of losing the whole outline.
    return (j.notes as unknown[])
      .filter((n): n is Record<string, unknown> => !!n && typeof n === "object")
      .map((n) => ({ label: str(n.label), segments: segmentsOf(n) }));
  } catch {
    return null;
  }
}

function outlineText(notes: string): string {
  const o = parseOutline(notes);
  if (!o) return notes;
  return o
    .map((s) => [s.label, ...s.segments.map((g) => g.value)].join(" "))
    .join(" ");
}

const fmtDate = (ms: number) =>
  ms
    ? new Date(ms).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

// ── Small pieces ─────────────────────────────────────────────────────────────

function Outline({ notes }: { notes: string }) {
  const sections = parseOutline(notes);
  if (!sections) {
    return notes.trim() ? (
      <p className="whitespace-pre-wrap leading-relaxed text-ink/80">{notes}</p>
    ) : (
      <p className="text-ink/40 italic">No outline yet.</p>
    );
  }
  return (
    <div className="flex flex-col gap-6">
      {sections.map((s, i) => (
        <section key={i} className="break-inside-avoid">
          {s.label && (
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-gold-700 mb-2">
              {s.label}
            </h3>
          )}
          <div className="flex flex-col gap-2">
            {s.segments.map((g, j) =>
              g.kind === "space" ? (
                <div key={j} className="h-3" />
              ) : g.kind === "ref" ? (
                <div
                  key={j}
                  className="self-start rounded-lg px-3 py-1 text-sm font-semibold text-gold-700"
                  style={{ background: "rgba(217,119,6,0.08)" }}
                >
                  📖 {g.value}
                </div>
              ) : (
                <p key={j} className="whitespace-pre-wrap leading-relaxed text-ink/85">
                  {g.value}
                </p>
              ),
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden rounded-xl px-4 py-2 text-sm font-semibold border border-ink/15 hover:bg-ink/[0.04]"
    >
      Print
    </button>
  );
}

// ── Sign in ──────────────────────────────────────────────────────────────────

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth(), email.trim(), password);
    } catch (err) {
      const code = (err as { code?: string })?.code ?? "";
      setMessage(
        code === "auth/network-request-failed"
          ? "Couldn't reach the server. Check your connection and try again."
          : code === "auth/too-many-requests"
          ? "Too many attempts. Wait a few minutes, then try again."
          : "That email and password didn't match. Try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function reset() {
    if (!email.trim()) {
      setMessage("Enter your email above, then tap “Forgot password”.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth(), email.trim());
    } catch {
      // Same message either way — don't reveal which emails have accounts.
    }
    setMessage("If that email has an account, a reset link is on its way.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ background: "#FAF8F3" }}>
      <form onSubmit={submit} className="w-full max-w-sm">
        <a href="/" className="block w-16 h-16 rounded-2xl mx-auto mb-6"
          style={{ backgroundImage: "url('/icon.png')", backgroundSize: "580%", backgroundPosition: "49% 49%" }}
          aria-label="The Preacher home" />
        <h1 className="text-3xl font-black text-ink text-center tracking-tight mb-2">
          The Preacher for Web
        </h1>
        <p className="text-center text-ink/55 mb-8">
          Sign in with your app account to read, search and print your sermons.
        </p>
        <input type="email" autoComplete="email" required placeholder="Email" aria-label="Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 mb-3 outline-none focus:border-gold-600" />
        <input type="password" autoComplete="current-password" required placeholder="Password" aria-label="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 mb-4 outline-none focus:border-gold-600" />
        <button type="submit" disabled={busy}
          className="w-full rounded-xl py-3 font-bold text-white disabled:opacity-60"
          style={{ background: "linear-gradient(135deg, #B45309, #D97706)" }}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
        <button type="button" onClick={reset} className="w-full mt-3 text-sm text-ink/55 hover:text-ink">
          Forgot password
        </button>
        {message && <p className="mt-4 text-center text-sm text-ink/70">{message}</p>}
        <p className="mt-10 text-center text-xs text-ink/40">
          No account yet? Get The Preacher on the App Store, then sign in here.
        </p>
      </form>
    </main>
  );
}

// ── Reader ───────────────────────────────────────────────────────────────────

function Reader({ user }: { user: User }) {
  const [sermons, setSermons] = useState<Sermon[] | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"sermons" | "services">("sermons");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [s, e] = await Promise.all([
          getDocs(collection(db(), "users", user.uid, "sermons")),
          getDocs(collection(db(), "users", user.uid, "entries")),
        ]);
        setSermons(s.docs.map((d) => toSermon(d.id, d.data()))
          .sort((a, b) => b.updatedAt - a.updatedAt));
        setServices(e.docs.map((d) => toService(d.id, d.data()))
          .sort((a, b) => b.time - a.time));
      } catch {
        setError("Your sermons couldn't be loaded. Refresh to try again.");
        setSermons([]);
      }
    })();
  }, [user.uid]);

  const query = q.trim().toLowerCase();
  const shownSermons = useMemo(
    () => (sermons ?? []).filter((s) => !query || s.haystack.includes(query)),
    [sermons, query],
  );
  const shownServices = useMemo(
    () => services.filter((v) => !query || v.haystack.includes(query)),
    [services, query],
  );

  const sermon = tab === "sermons" ? sermons?.find((s) => s.id === selected) : undefined;
  const service = tab === "services" ? services.find((s) => s.id === selected) : undefined;

  return (
    <div className="min-h-screen bg-[#FAF8F3] print:bg-white">
      <header className="print:hidden sticky top-0 z-10 border-b border-ink/10 backdrop-blur"
        style={{ background: "rgba(250,248,243,0.92)" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <a href="/" className="font-black text-ink tracking-tight">The Preacher</a>
          <span className="text-xs font-semibold text-gold-700 rounded-full px-2 py-0.5"
            style={{ background: "rgba(217,119,6,0.10)" }}>Web</span>
          <div className="flex-1" />
          <span className="hidden sm:block text-sm text-ink/50 truncate max-w-[200px]">{user.email}</span>
          <button onClick={() => signOut(auth())} className="text-sm font-semibold text-ink/70 hover:text-ink">
            Sign out
          </button>
        </div>
      </header>

      {/* In print the list is hidden and the sermon takes the full page. */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-[340px_1fr] gap-6 print:block print:max-w-none print:p-0">
        {/* List */}
        <aside className={`print:hidden ${selected ? "hidden md:block" : ""}`}>
          <input value={q} onChange={(e) => setQ(e.target.value)}
            placeholder="Search titles, scriptures, places, notes…" aria-label="Search"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 mb-3 outline-none focus:border-gold-600" />
          <div className="flex gap-2 mb-3">
            {(["sermons", "services"] as const).map((t) => (
              <button key={t} aria-pressed={tab === t} onClick={() => { setTab(t); setSelected(null); }}
                className={`flex-1 rounded-xl py-2 text-sm font-bold ${tab === t ? "text-white" : "text-ink/60 bg-white border border-ink/10"}`}
                style={tab === t ? { background: "#1C1712" } : {}}>
                {t === "sermons" ? `Sermons (${shownSermons.length})` : `Services (${shownServices.length})`}
              </button>
            ))}
          </div>
          {sermons === null ? (
            <p className="text-ink/50 p-4">Loading your library…</p>
          ) : error ? (
            <p className="text-red-700 p-4">{error}</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {tab === "sermons"
                ? shownSermons.map((s) => (
                    <li key={s.id}>
                      <button onClick={() => setSelected(s.id)}
                        className={`w-full text-left rounded-2xl px-4 py-3 bg-white border ${selected === s.id ? "border-gold-600" : "border-ink/10"} hover:border-ink/25`}>
                        <div className="font-bold text-ink truncate">{s.title}</div>
                        <div className="text-xs text-ink/50 truncate">
                          {[s.scriptures, s.seriesName].filter(Boolean).join(" · ") || "No scripture"}
                        </div>
                      </button>
                    </li>
                  ))
                : shownServices.map((v) => (
                    <li key={v.id}>
                      <button onClick={() => setSelected(v.id)}
                        className={`w-full text-left rounded-2xl px-4 py-3 bg-white border ${selected === v.id ? "border-gold-600" : "border-ink/10"} hover:border-ink/25`}>
                        <div className="font-bold text-ink truncate">{v.message || "Service"}</div>
                        <div className="text-xs text-ink/50 truncate">
                          {[fmtDate(v.time), v.place].filter(Boolean).join(" · ")}
                        </div>
                      </button>
                    </li>
                  ))}
              {(tab === "sermons" ? shownSermons : shownServices).length === 0 && (
                <li className="text-ink/50 p-4 text-sm">
                  {query ? `Nothing matches “${q}”.` : "Nothing here yet."}
                </li>
              )}
            </ul>
          )}
        </aside>

        {/* Detail */}
        <main className={`${selected ? "" : "hidden md:block"} min-w-0`}>
          {!sermon && !service ? (
            <div className="print:hidden rounded-3xl bg-white border border-ink/10 p-10 text-center text-ink/50">
              Choose a sermon or service to read it here.
            </div>
          ) : (
            <article className="rounded-3xl bg-white border border-ink/10 p-6 md:p-10 print:border-0 print:p-0">
              <div className="print:hidden flex items-center justify-between mb-6">
                <button onClick={() => setSelected(null)} className="md:hidden text-sm font-semibold text-ink/60">
                  ← Back
                </button>
                <span className="hidden md:block" />
                <PrintButton />
              </div>
              {sermon && <SermonView sermon={sermon} services={services} />}
              {service && (
                <ServiceView service={service}
                  sermon={sermons?.find((s) => s.id === service.sermonCloudId)} />
              )}
            </article>
          )}
        </main>
      </div>
    </div>
  );
}

function SermonView({ sermon, services }: { sermon: Sermon; services: Service[] }) {
  const preached = services.filter((v) => v.sermonCloudId === sermon.id);
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black text-ink tracking-tight mb-2">{sermon.title}</h1>
      {sermon.scriptures && <p className="text-gold-700 font-semibold mb-1">{sermon.scriptures}</p>}
      {sermon.seriesName && <p className="text-sm text-ink/50 mb-6">Series: {sermon.seriesName}</p>}
      <div className="mt-6"><Outline notes={sermon.notes} /></div>
      {preached.length > 0 && (
        <div className="print:hidden mt-10 pt-6 border-t border-ink/10">
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-ink/50 mb-3">
            Preached {preached.length} time{preached.length === 1 ? "" : "s"}
          </h2>
          <ul className="text-sm text-ink/70 flex flex-col gap-1">
            {preached.map((v) => (
              <li key={v.id}>{[fmtDate(v.time), v.place].filter(Boolean).join(" · ")}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function ServiceView({ service, sermon }: { service: Service; sermon?: Sermon }) {
  return (
    <>
      <p className="text-sm text-ink/50 mb-1">
        {[fmtDate(service.time), service.place].filter(Boolean).join(" · ")}
      </p>
      <h1 className="text-3xl md:text-4xl font-black text-ink tracking-tight mb-2">
        {service.message || "Service"}
      </h1>
      {service.scriptures && <p className="text-gold-700 font-semibold mb-1">{service.scriptures}</p>}
      {!service.isOwnMessage && service.pastor && (
        <p className="text-sm text-ink/50">Preached by {service.pastor}</p>
      )}
      {service.comments.trim() && (
        <div className="mt-6"><Outline notes={service.comments} /></div>
      )}
      {!service.comments.trim() && sermon && (
        <div className="mt-6"><Outline notes={sermon.notes} /></div>
      )}
      {service.crowdResponse.trim() && (
        <div className="mt-8 pt-6 border-t border-ink/10">
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-ink/50 mb-2">Response</h2>
          <p className="whitespace-pre-wrap text-ink/80">{service.crowdResponse}</p>
        </div>
      )}
    </>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WebApp() {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => onAuthStateChanged(auth(), async (u) => {
    // Firebase caches emailVerified — refresh it once on sign-in, and if
    // they've just verified, get a fresh token too (the security rules read
    // the token's claim, not the cached user).
    if (u) {
      await u.reload().catch(() => {});
      if (u.emailVerified) await u.getIdToken(true).catch(() => {});
    }
    setUser(u ?? null);
  }), []);

  if (user === undefined) {
    return <main className="min-h-screen" style={{ background: "#FAF8F3" }} />;
  }
  if (!user) return <SignIn />;
  if (!user.emailVerified) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 text-center" style={{ background: "#FAF8F3" }}>
        <div className="max-w-sm">
          <h1 className="text-2xl font-black text-ink mb-3">Verify your email first</h1>
          <p className="text-ink/60 mb-6">
            Open the verification email we sent when you signed up in the app, then sign in again here.
          </p>
          <button
            onClick={async () => {
              await user.reload().catch(() => {});
              if (user.emailVerified) {
                await user.getIdToken(true).catch(() => {});
                window.location.reload();
              }
            }}
            className="block mx-auto mb-3 rounded-xl px-5 py-2.5 font-bold text-white"
            style={{ background: "#1C1712" }}>
            I&apos;ve verified — check again
          </button>
          <button onClick={() => signOut(auth())} className="font-semibold text-gold-700">Sign out</button>
        </div>
      </main>
    );
  }
  return <Reader user={user} />;
}
