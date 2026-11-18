"use client";

// The page behind /c/<slug> — a church's public page: its name and about,
// and the sermons its pastor chose to publish from The Preacher app. Anyone
// can read it; nothing is here unless the pastor published it.
//
// Served for every slug by a rewrite in vercel.json (/c/:slug -> /c/),
// because the site is a static export. Reads churches/{slug} and its
// sermons straight from Firestore (public-read by the security rules).

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  type Timestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Outline } from "@/lib/outline";

type Church = { name: string; city: string; about: string };
type Sermon = {
  id: string;
  title: string;
  scriptures: string;
  seriesName: string;
  notes: string;
  preachedOn: number;
};

const APP_STORE_URL = "https://apps.apple.com/app/id6775250750";
const str = (v: unknown) => (typeof v === "string" ? v : "");
const ms = (v: unknown) =>
  v && typeof (v as Timestamp).toMillis === "function"
    ? (v as Timestamp).toMillis()
    : 0;
const fmtDate = (t: number) =>
  t
    ? new Date(t).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

function slugFromPath(): string {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const i = parts.indexOf("c");
  return (i >= 0 ? parts[i + 1] : "")?.toLowerCase() ?? "";
}

export default function ChurchPage() {
  const [state, setState] = useState<"loading" | "missing" | "ready" | "error">(
    "loading",
  );
  const [church, setChurch] = useState<Church | null>(null);
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const slug = slugFromPath();
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
      setState("missing");
      return;
    }
    (async () => {
      try {
        const c = await getDoc(doc(db(), "churches", slug));
        if (!c.exists()) {
          setState("missing");
          return;
        }
        const d = c.data();
        setChurch({ name: str(d.name), city: str(d.city), about: str(d.about) });
        document.title = `${str(d.name)} — Sermons`;
        const snap = await getDocs(collection(db(), "churches", slug, "sermons"));
        const list = snap.docs.map((s) => {
          const x = s.data();
          return {
            id: s.id,
            title: str(x.title),
            scriptures: str(x.scriptures),
            seriesName: str(x.seriesName),
            notes: str(x.notes),
            preachedOn: ms(x.preachedOn) || ms(x.publishedAt),
          };
        });
        list.sort((a, b) => b.preachedOn - a.preachedOn);
        setSermons(list);
        // A link straight to one sermon: /c/<slug>#<id>.
        const hash = window.location.hash.replace("#", "");
        if (hash && list.some((s) => s.id === hash)) setOpenId(hash);
        setState("ready");
      } catch {
        setState("error");
      }
    })();
  }, []);

  // Following a /c/<slug>#<id> link from this same page only changes the hash.
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      setOpenId(id && sermons.some((s) => s.id === id) ? id : null);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [sermons]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sermons;
    return sermons.filter((s) =>
      [s.title, s.scriptures, s.seriesName].some((v) =>
        v.toLowerCase().includes(q),
      ),
    );
  }, [sermons, query]);

  const open = sermons.find((s) => s.id === openId) ?? null;

  if (state === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#FAF8F3" }}>
        <p className="text-ink/50">Loading…</p>
      </main>
    );
  }

  if (state !== "ready" || !church) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6" style={{ background: "#FAF8F3" }}>
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-black text-ink mb-3">
            {state === "error" ? "Couldn't load this page" : "Page not found"}
          </h1>
          <p className="text-ink/60 mb-8">
            {state === "error"
              ? "Check your connection and try again."
              : "This church page doesn't exist, or it was taken down."}
          </p>
          <a href="/" className="underline text-ink/70">
            The Preacher
          </a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: "#FAF8F3", minHeight: "100vh" }}>
      <nav
        className="print:hidden flex items-center justify-between px-6 h-16 border-b"
        style={{ borderColor: "rgba(28,23,18,0.07)" }}
      >
        <a href="/" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl"
            style={{
              backgroundImage: "url('/icon.png')",
              backgroundSize: "580%",
              backgroundPosition: "49% 49%",
            }}
          />
          <span className="text-ink font-bold text-[15px]">The Preacher</span>
        </a>
        <a
          href={APP_STORE_URL}
          className="text-sm font-semibold rounded-xl px-4 py-2 text-white"
          style={{ background: "#1C1712" }}
        >
          Get the app
        </a>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {open ? (
          <article>
            <button
              onClick={() => {
                setOpenId(null);
                history.replaceState(null, "", window.location.pathname);
              }}
              className="print:hidden text-sm text-ink/60 hover:text-ink mb-6"
            >
              ← All sermons
            </button>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/40 mb-2">
              {church.name}
            </p>
            <h1 className="text-4xl font-black text-ink tracking-tight mb-2">
              {open.title}
            </h1>
            <p className="text-ink/60 mb-1">
              {[open.scriptures, open.seriesName].filter(Boolean).join(" · ")}
            </p>
            {open.preachedOn > 0 && (
              <p className="text-ink/45 text-sm">{fmtDate(open.preachedOn)}</p>
            )}
            <div className="mt-8">
              <Outline notes={open.notes} />
            </div>
            <div className="print:hidden mt-10 flex gap-3">
              <button
                onClick={() => window.print()}
                className="rounded-xl px-4 py-2 text-sm font-semibold border border-ink/15"
              >
                Print
              </button>
            </div>
          </article>
        ) : (
          <>
            <h1 className="text-4xl font-black text-ink tracking-tight">
              {church.name}
            </h1>
            {church.city && <p className="text-ink/55 mt-1">{church.city}</p>}
            {church.about && (
              <p className="text-ink/75 mt-5 whitespace-pre-wrap leading-relaxed">
                {church.about}
              </p>
            )}
            <div className="mt-10 mb-4 flex items-center gap-3">
              <h2 className="text-xs font-black uppercase tracking-[0.18em] text-ink/45 flex-1">
                Sermons
              </h2>
              {sermons.length > 5 && (
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                  aria-label="Search sermons"
                  className="rounded-xl border border-ink/15 bg-white px-3 py-1.5 text-sm"
                />
              )}
            </div>
            {shown.length === 0 ? (
              <p className="text-ink/50">
                {sermons.length === 0
                  ? "No sermons published yet."
                  : "No sermons match."}
              </p>
            ) : (
              <ul className="flex flex-col gap-3">
                {shown.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => {
                        setOpenId(s.id);
                        history.replaceState(null, "", `#${s.id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="w-full text-left rounded-2xl bg-white border px-5 py-4 hover:shadow-sm"
                      style={{ borderColor: "rgba(28,23,18,0.08)" }}
                    >
                      <p className="font-bold text-ink">{s.title}</p>
                      <p className="text-sm text-ink/55">
                        {[s.scriptures, fmtDate(s.preachedOn)]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-14 text-center text-sm text-ink/45">
              Published with{" "}
              <a href="/" className="underline">
                The Preacher
              </a>
              , the ministry app for preachers.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
