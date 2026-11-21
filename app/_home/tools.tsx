"use client";

import { useEffect, useMemo, useState } from "react";
import { Typewriter, useReducedMotion } from "./ui";

/* ─── V. New tools: small working demos ────────────────────────────────── */

export function VoiceNote() {
  const [listening, setListening] = useState(false);
  const [done, setDone] = useState(false);
  return (
    <div className="pb-tile">
      <p className="pb-tile-kicker">Voice notes</p>
      <p className="pb-tile-title">Speak it. It’s typed as you talk.</p>
      <div className="pb-tile-stage">
        <p className="min-h-[4.5rem] font-cardo text-[17px] leading-relaxed">
          {listening || done ? (
            <Typewriter
              text="The brook dried up because there had been no rain, and still God had a plan for Elijah."
              start
              speed={45}
              onDone={() => {
                setListening(false);
                setDone(true);
              }}
            />
          ) : (
            <span className="text-pb-muted">Tap the mic and preach a thought.</span>
          )}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            className={`pb-mic ${listening ? "is-on" : ""}`}
            aria-pressed={listening}
            aria-label={listening ? "Listening" : "Start a voice note"}
            onClick={() => {
              setDone(false);
              setListening(true);
            }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
            </svg>
          </button>
          <span className={`pb-wave ${listening ? "is-on" : ""}`} aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => <i key={i} style={{ animationDelay: `${(i % 5) * -130}ms` }} />)}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Illustrations() {
  const [back, setBack] = useState(false);
  return (
    <div className="pb-tile">
      <p className="pb-tile-kicker">Illustrations</p>
      <p className="pb-tile-title">Every story, and where you’ve told it.</p>
      <button type="button" className={`pb-flip ${back ? "is-back" : ""}`} onClick={() => setBack((b) => !b)} aria-pressed={back}>
        <span className="pb-flip-face">
          <span className="block font-cardo text-[1.2rem]">The lighthouse keeper</span>
          <span className="mt-1 block font-cardo text-[14px] text-pb-red">Matthew 5:14–16</span>
          <span className="mt-2 block text-[14px] leading-relaxed text-pb-muted">For forty years he kept the light burning on a rock no ship would ever thank him for…</span>
          <span className="mt-3 block text-xs font-semibold">Used 2× · tap to see where</span>
        </span>
        <span className="pb-flip-face is-back">
          <span className="block text-xs font-semibold text-pb-muted">Where you’ve used it</span>
          <span className="mt-2 block font-cardo text-[1.1rem]">Let Your Light Shine</span>
          <span className="block text-xs text-pb-muted">Grace Fellowship · Oct 12</span>
          <span className="mt-2 block font-cardo text-[1.1rem]">Salt and Light</span>
          <span className="block text-xs text-pb-muted">Not preached yet</span>
        </span>
      </button>
    </div>
  );
}

const REMOTE_POINTS = ["The text", "God provides in the hidden place", "Sometimes the brook dries up", "The next provision may look like less", "Altar call"];

export function PulpitRemote() {
  const [i, setI] = useState(1);
  return (
    <div className="pb-tile">
      <p className="pb-tile-kicker">Pulpit Remote</p>
      <p className="pb-tile-title">iPad on the pulpit. Phone in your hand.</p>
      <div className="pb-tile-stage grid grid-cols-[1.4fr_1fr] items-end gap-3">
        <div className="pb-tablet" aria-label="Pulpit device">
          {REMOTE_POINTS.map((p, k) => (
            <p key={p} className={`pb-tablet-line ${k === i ? "is-on" : ""}`}>{p}</p>
          ))}
        </div>
        <div className="pb-remote">
          <span className="block text-[10px] font-semibold opacity-70">Now</span>
          <span className="block min-h-[2.4em] font-cardo text-[13px] leading-tight">{REMOTE_POINTS[i]}</span>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <button type="button" className="pb-remote-btn" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} aria-label="Previous point">Back</button>
            <button type="button" className="pb-remote-btn is-go" onClick={() => setI((v) => Math.min(REMOTE_POINTS.length - 1, v + 1))} disabled={i === REMOTE_POINTS.length - 1} aria-label="Next point">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReadingPlan() {
  const [done, setDone] = useState(38);
  const total = 365;
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="pb-tile">
      <p className="pb-tile-kicker">Reading plans</p>
      <p className="pb-tile-title">The Bible in a year, and shorter plans.</p>
      <div className="pb-tile-stage flex items-center gap-4">
        <svg viewBox="0 0 80 80" className="h-20 w-20 flex-none -rotate-90" role="img" aria-label={`${done} of ${total} days read`}>
          <circle cx="40" cy="40" r={r} fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="7" />
          <circle cx="40" cy="40" r={r} fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - done / total)} style={{ transition: "stroke-dashoffset 600ms ease" }} />
        </svg>
        <div>
          <p className="text-sm font-semibold">Day {done + 1} · <span className="font-cardo font-normal text-pb-red">Numbers 8–10</span></p>
          <p className="text-xs text-pb-muted">{done} of {total} days read</p>
          <button type="button" className="pb-mini-btn is-solid mt-2" onClick={() => setDone((d) => Math.min(total, d + 1))}>
            Day {done + 1} read
          </button>
        </div>
      </div>
    </div>
  );
}

const VOTD = [
  { t: "God is our refuge and strength, a very present help in trouble.", r: "Psalm 46:1" },
  { t: "Which hope we have as an anchor of the soul, both sure and stedfast…", r: "Hebrews 6:19" },
  { t: "…though it tarry, wait for it; because it will surely come, it will not tarry.", r: "Habakkuk 2:3" },
];

export function Widget() {
  const reduce = useReducedMotion();
  const [k, setK] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setK((v) => (v + 1) % VOTD.length), 4200);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <div className="pb-tile">
      <p className="pb-tile-kicker">Home Screen widget</p>
      <p className="pb-tile-title">A verse of the day, without opening the app.</p>
      <div className="pb-tile-stage">
        <div className="pb-widget">
          <span className="text-[11px] font-semibold opacity-70">Verse of the Day</span>
          <p key={k} className="pb-pop mt-1.5 font-cardo text-[16px] leading-snug">{VOTD[k].t}</p>
          <span className="mt-1.5 block font-cardo text-[13px] text-pb-red-night">{VOTD[k].r}</span>
        </div>
      </div>
    </div>
  );
}

const GUIDE = [
  ["Log a sermon", "Home → the + button"],
  ["Voice notes", "Notes → the mic"],
  ["Pulpit Remote", "Home → Prepare → Pulpit Remote"],
  ["Strong’s Concordance", "Bible → tap a verse → Strong’s"],
  ["Reading plans", "Bible → the calendar button"],
  ["Send a sermon", "Messages → a chat → +"],
  ["Illustrations", "Sermons → Library → + → Illustrations"],
  ["Switch accounts", "Settings → Accounts"],
];

export function FeatureGuide() {
  const [q, setQ] = useState("");
  const list = useMemo(() => GUIDE.filter(([t, w]) => (t + w).toLowerCase().includes(q.trim().toLowerCase())), [q]);
  return (
    <div className="pb-tile">
      <p className="pb-tile-kicker">Features guide</p>
      <p className="pb-tile-title">Everything the app does, and how to get there.</p>
      <div className="pb-tile-stage">
        <label className="sr-only" htmlFor="pb-guide">Search features</label>
        <input id="pb-guide" className="pb-input" placeholder="Try “remote” or “Strong’s”" value={q} onChange={(e) => setQ(e.target.value)} />
        <ul className="mt-2 max-h-[8.5rem] overflow-y-auto text-sm">
          {list.length ? (
            list.map(([t, w]) => (
              <li key={t} className="flex justify-between gap-3 border-b border-pb-hair py-1.5 last:border-0">
                <span className="font-semibold">{t}</span>
                <span className="text-right text-xs text-pb-muted">{w}</span>
              </li>
            ))
          ) : (
            <li className="py-2 text-pb-muted">Nothing by that name. The full guide is in Settings → Features.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
