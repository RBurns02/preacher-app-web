"use client";

import { useState } from "react";
import { APP_STORE_URL, Check } from "./ui";

/* ─── VI. Pricing ──────────────────────────────────────────────────────── */

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <div>
      <div className="mx-auto mb-8 flex w-fit rounded-full border border-pb-hair-strong bg-pb-lift p-1" role="group" aria-label="Billing">
        <button type="button" className="pb-seg" aria-pressed={!yearly} onClick={() => setYearly(false)}>Monthly</button>
        <button type="button" className="pb-seg" aria-pressed={yearly} onClick={() => setYearly(true)}>
          Yearly <span className="ml-1 text-xs opacity-75">save 25%</span>
        </button>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="pb-card flex flex-col p-7">
          <p className="text-sm font-semibold text-pb-muted">Free</p>
          <p className="mt-2 font-cardo text-5xl">$0</p>
          <p className="mt-1 text-sm text-pb-muted">No trial, no card.</p>
          <ul className="mt-6 grid gap-2.5 text-[15px]">
            <Check>The Bible, with verse notes</Check>
            <Check>Your first 3 sermons: write, preach, print and export them</Check>
            <Check>Messages, friends, and Study Groups: start one or join one</Check>
            <Check>The Pulpit Bible look</Check>
            <Check>Reading plans and the Verse of the Day widget</Check>
          </ul>
          <a href={APP_STORE_URL} className="pb-cta-outline mt-auto">Download free</a>
        </div>
        <div className="pb-card is-featured flex flex-col p-7">
          <p className="text-sm font-semibold">Premium</p>
          <p className="mt-2 font-cardo text-5xl">
            <span key={String(yearly)} className="pb-pop inline-block">{yearly ? "$44.99" : "$4.99"}</span>
            <span className="ml-1 text-lg">{yearly ? "/ year" : "/ month"}</span>
          </p>
          <p className="mt-1 text-sm opacity-80">{yearly ? "About $3.75 a month. " : ""}7 days free, cancel anytime.</p>
          <ul className="mt-6 grid gap-2.5 text-[15px]">
            <Check dark>Unlimited saved sermons and services</Check>
            <Check dark>Strong’s Concordance and the Word Study Notebook</Check>
            <Check dark>Translate a sermon into 30+ languages</Check>
            <Check dark>Analytics, the annual report and the map of everywhere you’ve preached</Check>
            <Check dark>Batch Log for a revival, conference or series</Check>
            <Check dark>The Sharp and Paper looks, and sync on every device you sign in to</Check>
          </ul>
          <a href={APP_STORE_URL} className="pb-cta-light mt-8">Start 7 days free</a>
        </div>
      </div>
      <p className="mt-5 text-center text-xs text-pb-muted">
        Subscriptions renew automatically unless cancelled at least 24 hours before the period ends. Manage them in your Apple Account settings.
      </p>
    </div>
  );
}

/* ─── Questions ────────────────────────────────────────────────────────── */

const FAQ: [string, string][] = [
  ["Does it work without a signal?", "Yes. Everything saves to your phone first, so the whole app works offline and syncs when you’re back online."],
  ["Is there an Android version?", "It’s coming to Google Play. The Preacher is on the iPhone and iPad App Store today."],
  ["Can I read my sermons on a computer?", "Yes, with Premium. It keeps your sermons and services on every device you sign in to, and you can read, search and print them at thepreacherapp.com/app. A free account stays on your phone."],
  ["How do I use Pulpit Remote?", "Put an iPad or second phone on the pulpit and open your sermon in Prepare Mode, then turn on Phone Remote in Customize. On your phone, go to Home → Prepare → Pulpit Remote. Both need to be signed in to the same account."],
  ["Who can message me?", "Anyone can find your profile, but a first message from someone new waits in Requests until you accept it. You can switch on “Only friends can message me”, and report or block anyone."],
  ["What happens to my data?", "It’s yours. No ads, no tracking across other apps, and no selling of your data. Deleted items rest in a 30-day Recycle Bin, and Settings → Delete Account removes your account."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-pb-hair-strong border-y border-pb-hair-strong">
      {FAQ.map(([q, a], i) => (
        <div key={q}>
          <h3>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold"
              aria-expanded={open === i}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {q}
              <svg viewBox="0 0 24 24" className={`h-5 w-5 flex-none transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
            </button>
          </h3>
          <div id={`faq-${i}`} className={`pb-faq ${open === i ? "is-open" : ""}`}>
            <div><p className="pb-0 pb-5 pr-10 leading-relaxed text-pb-muted">{a}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}
