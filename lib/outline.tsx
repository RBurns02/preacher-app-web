// The app's sermon outline JSON ({"type":"sermon_outline","notes":[...]}),
// parsed and drawn the same way everywhere on the site: the web reader (/app)
// and church pages (/c/<slug>).

export type Segment = { kind: "text" | "ref" | "space"; value: string };
export type Section = { label: string; segments: Segment[] };

const str = (v: unknown) => (typeof v === "string" ? v : "");

export function segmentsOf(n: Record<string, unknown>): Segment[] {
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
export function parseOutline(notes: string): Section[] | null {
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

export function Outline({ notes }: { notes: string }) {
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
