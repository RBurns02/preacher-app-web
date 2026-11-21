"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Typewriter, useInView, useReducedMotion } from "./ui";

/* ─── I. Log a sermon in thirty seconds ────────────────────────────────── */

const LOG_FIELDS = [
  { label: "Sermon", value: "When the Brook Dries Up", serif: true },
  { label: "Scripture", value: "1 Kings 17:1–7", red: true },
  { label: "Where", value: "Grace Fellowship" },
  { label: "When", value: "Sunday, Nov 23 · Morning service" },
];

const EARLIER = [
  { title: "The Anchor Holds", ref: "Hebrews 6:17–20", meta: "Nov 16 · Grace Fellowship" },
  { title: "Fire on the Mountain", ref: "1 Kings 18:36–39", meta: "Nov 2 · Revival, Broken Arrow" },
];

export function LogDemo() {
  const { ref, inView } = useInView(0.35);
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0); // field being typed; 4 = ready to save
  const [saved, setSaved] = useState(false);
  const [run, setRun] = useState(0);

  const next = useCallback(() => setStep((s) => s + 1), []);
  useEffect(() => {
    if (step === LOG_FIELDS.length && !saved) {
      const t = setTimeout(() => setSaved(true), reduce ? 0 : 900);
      return () => clearTimeout(t);
    }
  }, [step, saved, reduce]);

  const replay = () => {
    setSaved(false);
    setStep(0);
    setRun((r) => r + 1);
  };

  return (
    <div ref={ref} className="pb-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-pb-hair px-5 py-3.5">
        <span className="text-sm font-semibold">Log a sermon</span>
        <button type="button" onClick={replay} className="pb-mini-btn" aria-label="Play the demo again">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5" /></svg>
          Replay
        </button>
      </div>
      <div className="grid gap-3 p-5" key={run}>
        {LOG_FIELDS.map((f, i) => (
          <div key={f.label} className={`pb-field ${step === i && inView ? "is-active" : ""}`}>
            <span className="pb-field-label">{f.label}</span>
            <span className={`${f.serif ? "font-cardo text-[19px]" : ""} ${f.red ? "font-cardo text-[18px] text-pb-red" : ""} min-h-[1.6em]`}>
              {step > i ? f.value : step === i ? <Typewriter text={f.value} start={inView} speed={34} onDone={next} /> : null}
            </span>
          </div>
        ))}
        <button
          type="button"
          className={`pb-save ${step >= LOG_FIELDS.length ? "is-ready" : ""} ${saved ? "is-done" : ""}`}
          disabled={step < LOG_FIELDS.length || saved}
          onClick={() => setSaved(true)}
        >
          {saved ? "Logged" : "Save"}
        </button>
      </div>
      <div className="border-t border-pb-hair bg-pb-deep/60 px-5 py-4">
        <p className="mb-2 text-xs font-semibold text-pb-muted">Timeline</p>
        <ul className="grid gap-2">
          {saved && (
            <li className="pb-timeline-item is-new">
              <span className="font-cardo text-[17px]">When the Brook Dries Up</span>
              <span className="text-xs text-pb-muted">
                <span className="font-cardo text-[13px] text-pb-red">1 Kings 17:1–7</span> · Nov 23 · Grace Fellowship · preached 2 times
              </span>
            </li>
          )}
          {EARLIER.map((e) => (
            <li key={e.title} className="pb-timeline-item">
              <span className="font-cardo text-[17px]">{e.title}</span>
              <span className="text-xs text-pb-muted">
                <span className="font-cardo text-[13px] text-pb-red">{e.ref}</span> · {e.meta}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── II. Prepare, then preach ─────────────────────────────────────────── */

const POINTS = [
  { h: "God provides in the hidden place", b: "Cherith wasn’t a punishment. It was provision with no audience.", r: "1 Kings 17:3–4" },
  { h: "Sometimes the brook dries up", b: "The brook dried up while Elijah was exactly where God sent him.", r: "1 Kings 17:7" },
  { h: "The next provision may look like less", b: "From a brook to a widow with a handful of meal. Obedience came before abundance.", r: "1 Kings 17:9" },
  { h: "Altar call", b: "Is your brook drying up? The same word that sent you there will send you on.", r: "Philippians 4:19" },
];

export function PreachDemo() {
  const reduce = useReducedMotion();
  const [preaching, setPreaching] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [secs, setSecs] = useState(0);
  const [auto, setAuto] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!preaching) return;
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [preaching]);

  useEffect(() => {
    if (!auto || !preaching || reduce) return;
    const el = scroller.current;
    if (!el) return;
    const t = setInterval(() => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 2) setAuto(false);
      else el.scrollTop += 1;
    }, 40);
    return () => clearInterval(t);
  }, [auto, preaching, reduce]);

  const start = () => {
    setPreaching(true);
    setSecs(0);
    setActive(0);
  };
  const stop = () => {
    setPreaching(false);
    setAuto(false);
    setActive(null);
  };
  const clock = `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(secs % 60).padStart(2, "0")}`;

  return (
    <div className={`pb-preach ${preaching ? "is-preaching" : ""}`}>
      <div className="flex items-center justify-between px-5 pt-4">
        <span className="pb-badge">{preaching ? "Preaching" : "Preparing"}</span>
        <span className="text-sm tabular-nums opacity-80" aria-live="off">{preaching ? clock : "Tap start to begin"}</span>
      </div>
      <div className="px-5 pt-3 text-center">
        <p className="font-cardo text-[clamp(1.5rem,3vw,1.9rem)] leading-tight">When the Brook Dries Up</p>
        <p className="pb-ref mt-1 font-cardo">1 Kings 17:1–7</p>
      </div>
      <div ref={scroller} className="pb-preach-scroll" tabIndex={0} aria-label="Sermon outline">
        {POINTS.map((p, i) => (
          <button
            key={p.h}
            type="button"
            className={`pb-point ${active === i ? "is-active" : ""}`}
            onClick={() => (preaching ? setActive(i) : undefined)}
            aria-pressed={preaching ? active === i : undefined}
          >
            <span className="block text-xs font-semibold opacity-60">{i < 3 ? ["I", "II", "III"][i] : "Altar call"}</span>
            <span className="mt-1 block font-cardo text-[1.25rem] leading-snug">{p.h}</span>
            <span className="mt-1.5 block text-[15px] leading-relaxed opacity-80">{p.b}</span>
            <span className="pb-ref mt-1.5 block font-cardo text-[15px]">{p.r}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-2 px-5 pb-5 pt-3">
        {preaching ? (
          <>
            <button type="button" className="pb-preach-btn flex-1" onClick={stop}>Stop</button>
            <button type="button" className="pb-preach-btn is-ghost" aria-pressed={auto} onClick={() => setAuto((a) => !a)}>
              {auto ? "Pause scroll" : "Auto-scroll"}
            </button>
          </>
        ) : (
          <button type="button" className="pb-preach-btn flex-1" onClick={start}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M7 4.8v14.4a.8.8 0 0 0 1.2.7l11.3-7.2a.8.8 0 0 0 0-1.4L8.2 4.1A.8.8 0 0 0 7 4.8z" /></svg>
            Start sermon
          </button>
        )}
      </div>
      <p className="sr-only" aria-live="polite">{preaching && active !== null ? `On point: ${POINTS[active].h}` : ""}</p>
    </div>
  );
}

/* ─── III. Psalm 23 with Strong's ──────────────────────────────────────── */

// Real entries from the app's bundled Strong's lexicon (trimmed).
const STRONGS: Record<string, { num: string; lemma: string; xlit: string; say: string; def: string }> = {
  LORD: { num: "H3068", lemma: "יְהֹוָה", xlit: "Yᵉhôvâh", say: "yeh-ho-vaw'", def: "(the) self-Existent or Eternal; Jehovah, Jewish national name of God; Jehovah, the Lord." },
  shepherd: { num: "H7462", lemma: "רָעָה", xlit: "râʻâh", say: "raw-aw'", def: "A primitive root; to tend a flock; i.e. pasture it; intransitively, to graze; generally to rule." },
  want: { num: "H2637", lemma: "חָסֵר", xlit: "châçêr", say: "khaw-sare'", def: "A primitive root; to lack; by implication, to fail, want, lessen." },
  "lie down": { num: "H7257", lemma: "רָבַץ", xlit: "râbats", say: "raw-bats'", def: "A primitive root; to crouch (on all four legs folded, like a recumbent animal); to recline, repose." },
  green: { num: "H1877", lemma: "דֶּשֶׁא", xlit: "desheʼ", say: "deh'-sheh", def: "A sprout; by analogy, grass; (tender) grass, green, (tender) herb." },
  pastures: { num: "H4999", lemma: "נָאָה", xlit: "nâʼâh", say: "naw-aw'", def: "A home; figuratively, a pasture; habitation, house, pasture, pleasant place." },
  "leadeth-2": { num: "H5095", lemma: "נָהַל", xlit: "nâhal", say: "naw-hal'", def: "Properly, to run with a sparkle, i.e. flow; hence, to conduct, and by inference to protect, sustain; carry, feed, guide, lead." },
  still: { num: "H4496", lemma: "מְנוּחָה", xlit: "mᵉnûwchâh", say: "men-oo-khaw'", def: "Repose or (adverbially) peacefully; figuratively, consolation; hence an abode." },
  waters: { num: "H4325", lemma: "מַיִם", xlit: "mayim", say: "mah'-yim", def: "Water; figuratively, juice." },
  restoreth: { num: "H7725", lemma: "שׁוּב", xlit: "shûwb", say: "shoob", def: "A primitive root; to turn back (hence, away), literally or figuratively; generally to retreat; often adverbial, again." },
  soul: { num: "H5315", lemma: "נֶפֶשׁ", xlit: "nephesh", say: "neh'-fesh", def: "Properly, a breathing creature, i.e. animal of vitality; used very widely in a literal, accommodated or figurative sense." },
  "leadeth-3": { num: "H5148", lemma: "נָחָה", xlit: "nâchâh", say: "naw-khaw'", def: "A primitive root; to guide; bestow, bring, govern, guide, lead (forth)." },
  paths: { num: "H4570", lemma: "מַעְגָּל", xlit: "maʻgâl", say: "mah-gawl'", def: "A track (literally or figuratively); going, path, trench, way(-side)." },
  righteousness: { num: "H6664", lemma: "צֶדֶק", xlit: "tsedeq", say: "tseh'-dek", def: "The right (natural, moral or legal); also equity or prosperity." },
  "name's": { num: "H8034", lemma: "שֵׁם", xlit: "shêm", say: "shame", def: "An appellation, as a mark or memorial of individuality; by implication honor, authority, character." },
};

// Psalm 23:1–3 (KJV), split so the studied words are tappable.
type Piece = string | { w: string; key: string; caps?: boolean };
const PSALM: { n: number; parts: Piece[] }[] = [
  { n: 1, parts: ["The ", { w: "Lord", key: "LORD", caps: true }, " is my ", { w: "shepherd", key: "shepherd" }, "; I shall not ", { w: "want", key: "want" }, "."] },
  { n: 2, parts: ["He maketh me to ", { w: "lie down", key: "lie down" }, " in ", { w: "green", key: "green" }, " ", { w: "pastures", key: "pastures" }, ": he ", { w: "leadeth", key: "leadeth-2" }, " me beside the ", { w: "still", key: "still" }, " ", { w: "waters", key: "waters" }, "."] },
  { n: 3, parts: ["He ", { w: "restoreth", key: "restoreth" }, " my ", { w: "soul", key: "soul" }, ": he ", { w: "leadeth", key: "leadeth-3" }, " me in the ", { w: "paths", key: "paths" }, " of ", { w: "righteousness", key: "righteousness" }, " for his ", { w: "name's", key: "name's" }, " sake."] },
];

const HIGHLIGHTS = [
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Blue", hex: "#00E5FF" },
  { name: "Orange", hex: "#FF6D00" },
  { name: "Pink", hex: "#FF00FF" },
];

export function BibleDemo() {
  const [word, setWord] = useState("shepherd");
  const [verse, setVerse] = useState<number | null>(null);
  const [marks, setMarks] = useState<Record<number, string>>({ 1: "#FFFF00" });
  const e = STRONGS[word];
  return (
    <div className="pb-card grid overflow-hidden md:grid-cols-[1.25fr_1fr]">
      <div className="p-6 md:p-8">
        <div className="mb-4 flex items-baseline justify-between">
          <span className="text-sm font-semibold">Psalm 23</span>
          <span className="text-xs text-pb-muted">KJV</span>
        </div>
        <div className="font-cardo text-[1.3rem] leading-[1.75] text-pb-ink">
          {PSALM.map((v) => (
            <p
              key={v.n}
              className={`pb-verse ${verse === v.n ? "is-selected" : ""}`}
              style={marks[v.n] ? { background: `${marks[v.n]}40`, boxShadow: `0 0 0 3px ${marks[v.n]}40` } : undefined}
            >
              <button type="button" className="pb-vnum" onClick={() => setVerse(verse === v.n ? null : v.n)} aria-label={`Select verse ${v.n}`} aria-pressed={verse === v.n}>
                {v.n}
              </button>
              {v.parts.map((p, i) =>
                typeof p === "string" ? (
                  <span key={i}>{p}</span>
                ) : (
                  <button
                    key={i}
                    type="button"
                    className={`pb-word ${word === p.key ? "is-on" : ""} ${p.caps ? "pb-smallcaps" : ""}`}
                    onClick={() => setWord(p.key)}
                    aria-pressed={word === p.key}
                  >
                    {p.w}
                  </button>
                ),
              )}
            </p>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-pb-muted">{verse ? `Highlight verse ${verse}:` : "Tap a verse number to highlight it."}</span>
          {verse &&
            HIGHLIGHTS.map((h) => (
              <button
                key={h.name}
                type="button"
                className="h-7 w-7 rounded-full border border-pb-hair-strong"
                style={{ background: h.hex }}
                aria-label={`Highlight verse ${verse} ${h.name.toLowerCase()}`}
                onClick={() => {
                  setMarks((m) => ({ ...m, [verse]: h.hex }));
                  setVerse(null);
                }}
              />
            ))}
          {verse && marks[verse] && (
            <button
              type="button"
              className="pb-mini-btn"
              onClick={() => {
                setMarks((m) => {
                  const c = { ...m };
                  delete c[verse];
                  return c;
                });
                setVerse(null);
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>
      <aside className="border-t border-pb-hair bg-pb-deep/60 p-6 md:border-l md:border-t-0 md:p-8" aria-live="polite">
        <p className="text-xs font-semibold text-pb-muted">Strong’s Concordance · {e.num}</p>
        <p key={word} className="pb-pop mt-3 font-cardo text-5xl leading-none" lang="he" dir="rtl">{e.lemma}</p>
        <p className="mt-3 font-semibold">{e.xlit}</p>
        <p className="text-sm text-pb-muted">{e.say}</p>
        <p className="mt-4 font-cardo text-[17px] leading-relaxed">{e.def}</p>
        <p className="mt-5 text-xs text-pb-muted">Tap any underlined word in the psalm. Strong’s is part of Premium.</p>
      </aside>
    </div>
  );
}
