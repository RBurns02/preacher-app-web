"use client";

import { useEffect, useState } from "react";
import { useInView, useReducedMotion } from "./ui";

/* ─── IV. Preachers, connected ─────────────────────────────────────────── */

type Msg = { from: "them" | "me"; text?: string; sermon?: boolean };
const THREAD: Msg[] = [
  { from: "them", text: "Preached Hebrews 6 on Sunday. Your anchor outline helped me a lot." },
  { from: "me", text: "Glad it helped. Here’s the whole thing." },
  { from: "me", sermon: true },
  { from: "them", text: "Saved it. Praying for your revival week." },
];

export function ChatDemo() {
  const { ref, inView } = useInView(0.4);
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setShown(THREAD.length);
      return;
    }
    if (shown >= THREAD.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 300 : 1100);
    return () => clearTimeout(t);
  }, [inView, shown, reduce]);
  const typing = inView && shown < THREAD.length && !reduce;
  const nextFromThem = THREAD[shown]?.from === "them";

  return (
    <div ref={ref} className="pb-card flex h-full flex-col overflow-hidden">
      <div className="flex items-center gap-3 border-b border-pb-hair px-5 py-3.5">
        <span className="pb-avatar">DR</span>
        <span>
          <span className="block text-sm font-semibold">David Reyes</span>
          <span className="block text-xs text-pb-muted">Pastor · First Baptist</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5" aria-live="polite">
        {THREAD.slice(0, shown).map((m, i) =>
          m.sermon ? (
            <div key={i} className="pb-bubble-sermon pb-msg-in self-end">
              <span className="text-xs text-pb-muted">You sent a sermon</span>
              <span className="font-cardo text-[1.25rem] leading-tight">The Anchor Holds</span>
              <span className="font-cardo text-[15px] text-pb-red">Hebrews 6:17–20</span>
              <span className="text-xs text-pb-muted">3 points · altar call</span>
            </div>
          ) : (
            <p key={i} className={`pb-msg-in pb-bubble ${m.from === "me" ? "is-me" : ""}`}>{m.text}</p>
          ),
        )}
        {typing && (
          <span className={`pb-typing ${nextFromThem ? "" : "self-end"}`} aria-hidden="true">
            <i /><i /><i />
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-pb-hair px-5 py-3">
        <span className="text-xs text-pb-muted">Anyone you send a sermon to can save it to their own library.</span>
        <button type="button" className="pb-mini-btn whitespace-nowrap" onClick={() => setSaved(true)} disabled={saved}>
          {saved ? "Saved to library" : "Save to my library"}
        </button>
      </div>
    </div>
  );
}

export function FriendRequest() {
  const [state, setState] = useState<"pending" | "friends" | "declined">("pending");
  return (
    <div className="pb-card p-5">
      <p className="text-xs font-semibold text-pb-muted">Friend request</p>
      <div className="mt-3 flex items-center gap-3">
        <span className="pb-avatar">MH</span>
        <span className="flex-1">
          <span className="block font-semibold">Marcus Hill</span>
          <span className="block text-xs text-pb-muted">Evangelist · Hill Ministries</span>
        </span>
        {state === "pending" ? (
          <span className="flex gap-2">
            <button type="button" className="pb-mini-btn" onClick={() => setState("declined")}>Decline</button>
            <button type="button" className="pb-mini-btn is-solid" onClick={() => setState("friends")}>Accept</button>
          </span>
        ) : (
          <span className="pb-msg-in text-sm font-semibold">{state === "friends" ? "Friends" : "Declined"}</span>
        )}
      </div>
      <p className="mt-3 text-sm text-pb-muted">
        {state === "friends"
          ? "His message moved from Requests to your chats."
          : "Messages from friends skip Requests. Everyone else waits until you say yes."}
      </p>
    </div>
  );
}

const KEEPING_UP: [string, number][] = [
  ["You", 12],
  ["David Reyes", 12],
  ["Tom Becker", 9],
  ["Paul Ndegwa", 12],
  ["Sarah Mitchell", 11],
  ["Ana Lopez", 6],
];

export function GroupPlan() {
  const { ref, inView } = useInView(0.4);
  return (
    <div ref={ref} className="pb-card p-5">
      <p className="text-xs font-semibold text-pb-muted">Tuesday Bible study · group plan</p>
      <p className="mt-1 font-cardo text-[1.35rem]">The Gospels in 30 Days</p>
      <p className="text-sm text-pb-muted">Day 12 of 30 · <span className="font-cardo text-pb-red">Mark 9–11</span></p>
      <ul className="mt-4 grid gap-2.5">
        {KEEPING_UP.map(([name, day], i) => (
          <li key={name} className="grid grid-cols-[7.5rem_1fr_auto] items-center gap-3 text-sm">
            <span>{name}</span>
            <span className="pb-bar" aria-hidden="true">
              <span style={{ width: inView ? `${(day / 12) * 100}%` : "0%", transitionDelay: `${i * 90}ms` }} />
            </span>
            <span className="w-24 text-right text-xs tabular-nums text-pb-muted">{day >= 12 ? "Up to date" : `${day} of 12 days`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
