"use client";

// The page behind /r/<code> — a referral invite.
//
// On an iPhone with the app installed, iOS matches the link against
// apple-app-site-association and opens The Preacher instead. Everyone else
// lands here: it says what arrived, shows the code to enter at sign-up, and
// points to the App Store. Who sent it is not known here and nothing is fetched.
//
// Served for every code by a rewrite in vercel.json (/r/:code -> /r/), because
// the site is a static export and the codes are not known at build time; the
// code is read from the address bar after the page loads.

import { useEffect, useState } from "react";
import { Footer, Nav } from "../_home/shell";
import { AppStoreButton, PlayComingSoon } from "../_home/ui";

// Codes look like "k7mp-3qzx": lowercase letters and digits around one hyphen.
const CODE_RE = /^[a-z0-9]{2,12}-[a-z0-9]{2,12}$/;

function codeFromPath(pathname: string): string | null {
  const m = pathname.match(/^\/r\/([^/]+)\/?$/);
  if (!m) return null;
  let raw: string;
  try {
    raw = decodeURIComponent(m[1]);
  } catch {
    return null;
  }
  const code = raw.trim().toLowerCase();
  return CODE_RE.test(code) ? code : null;
}

export default function ReferralInvitePage() {
  // undefined until the address bar has been read (the static HTML can't know).
  const [code, setCode] = useState<string | null | undefined>(undefined);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCode(codeFromPath(window.location.pathname));
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      // Clipboard blocked (insecure context, permissions): select the code so
      // a long-press or Ctrl+C still works.
      const el = document.getElementById("referral-code");
      const sel = window.getSelection();
      if (el && sel) {
        const range = document.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  };

  return (
    <div className="pb-home">
      <a href="#main" className="pb-skip">Skip to content</a>
      <Nav />
      <main id="main">
        <header className="pb-page-head">
          <div className="pb-hero-rules" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 pb-14 pt-28 sm:px-5 md:pb-20 md:pt-40">
            <h1
              className="pb-rise font-cardo text-[clamp(2.3rem,7vw,4.4rem)] leading-[1.04] text-pb-onion"
              style={{ textWrap: "balance" }}
            >
              You&rsquo;ve been invited to The Preacher
            </h1>
            <p
              className="pb-rise mt-5 max-w-xl text-lg leading-relaxed text-pb-night-muted"
              style={{ animationDelay: "120ms" }}
            >
              The record of your ministry: log every sermon, prepare and preach
              from your phone, and study the Bible deeper.
            </p>
          </div>
        </header>

        <section className="pb-band" aria-label="Your invite">
          <div className="mx-auto max-w-3xl px-4 sm:px-5">
            {code && (
              <div className="pb-card pb-pop mb-10 p-5 text-center sm:p-8">
                <p className="text-sm font-semibold text-pb-muted">Your invite code</p>
                <p
                  id="referral-code"
                  className="mt-3 break-all font-cardo text-[clamp(2.4rem,11vw,3.6rem)] leading-none tracking-[0.08em] text-pb-ink"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {code}
                </p>
                <button
                  type="button"
                  onClick={copy}
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-pb-ink px-6 text-[15px] font-semibold text-pb-onion transition-transform hover:-translate-y-px"
                  aria-live="polite"
                >
                  {copied ? (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>
                  )}
                  {copied ? "Copied" : "Copy code"}
                </button>
                <p className="mx-auto mt-5 max-w-sm leading-relaxed text-pb-muted">
                  Enter this code when you create your account.
                </p>
              </div>
            )}

            <div className="text-center">
              {code === null && (
                <p className="mx-auto mb-6 max-w-md leading-relaxed text-pb-muted">
                  Download The Preacher on your iPhone or iPad to get started.
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-3">
                <AppStoreButton />
                <PlayComingSoon />
              </div>
              <a
                href="/"
                className="mt-10 inline-block text-sm font-medium text-pb-muted underline-offset-4 hover:underline"
              >
                What is The Preacher? &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
