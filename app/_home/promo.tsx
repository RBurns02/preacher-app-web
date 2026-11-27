"use client";

import { useEffect, useState } from "react";

// Black Friday 2026: 40% off the first year of Premium Yearly (offer code
// PREACH40, iOS U.S.). Ends at midnight Central after Monday Nov 30; the bar
// removes itself then, so it can stay in the code until someone deletes it.
const ENDS = Date.parse("2026-12-01T06:00:00Z");
const REDEEM_URL =
  "https://apps.apple.com/redeem?ctx=offercodes&id=6775250750&code=PREACH40";
const DISMISS_KEY = "bf2026-dismissed";

export function PromoBar() {
  // Rendered only after mount, so the static HTML never shows an expired sale.
  const [show, setShow] = useState(false);
  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {}
    setShow(Date.now() < ENDS && !dismissed);
  }, []);
  if (!show) return null;
  const close = () => {
    setShow(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };
  return (
    <>
    {/* Room at the end of the page so the bar never covers the footer. */}
    <div aria-hidden="true" className="h-24 bg-pb-ink" />
    <div
      role="region"
      aria-label="Black Friday offer"
      className="fixed inset-x-0 bottom-0 z-[60] border-t-2 border-pb-gilt bg-pb-ink text-pb-onion shadow-[0_-8px_24px_rgba(0,0,0,0.25)]"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-5 sm:px-5">
        <p className="min-w-0 flex-1 text-sm leading-snug sm:text-base">
          <span className="font-semibold text-pb-gilt">Black Friday · 40% off</span>{" "}
          <span className="hidden sm:inline">Premium for your first year: </span>
          <span className="whitespace-nowrap">$26.99</span>{" "}
          <span className="text-pb-night-muted line-through">$44.99</span>
          <span className="text-pb-night-muted"> · iPhone · ends Monday</span>
        </p>
        <a
          href={REDEEM_URL}
          className="shrink-0 rounded-2xl bg-pb-onion px-4 py-2 text-sm font-semibold text-pb-ink transition hover:bg-white"
        >
          Claim offer
        </a>
        <button
          type="button"
          onClick={close}
          aria-label="Dismiss offer"
          className="shrink-0 rounded-full p-2 text-pb-night-muted transition hover:text-pb-onion"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
    </>
  );
}
