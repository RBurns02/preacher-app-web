"use client";

import { useEffect, useState } from "react";
import { PAGES, type PageSlug } from "./pages";
import { APP_STORE_URL, AppStoreButton, PhoneFrame, PlayComingSoon, Typewriter, useReducedMotion } from "./ui";

/** Shows once the visitor has scrolled past the top of the page. */
function useScrolledPast(y = 280) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const on = () => setPast(window.scrollY > y);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [y]);
  return past;
}

/** Thumb-index tabs down the right edge (desktop) and page chips (phone):
 *  one per page, the current page filled. */
export function ThumbIndex({ current }: { current?: PageSlug }) {
  const past = useScrolledPast();
  const shown = past || Boolean(current);
  return (
    <>
      <nav aria-label="Pages" className={`pb-thumbs ${shown ? "is-shown" : ""}`}>
        {PAGES.map((c) => (
          <a
            key={c.slug}
            href={`/${c.slug}/`}
            className="pb-thumb"
            aria-current={current === c.slug ? "page" : undefined}
            aria-label={`${c.numeral}. ${c.label}`}
          >
            <span className="pb-thumb-label" aria-hidden="true">{c.label}</span>
            <span className="pb-thumb-num" aria-hidden="true">{c.numeral}</span>
          </a>
        ))}
      </nav>
      <nav aria-label="Pages" className={`pb-chips hidden ${past ? "is-shown" : ""}`}>
        <div className="pb-chips-row">
          {PAGES.map((c) => (
            <a key={c.slug} href={`/${c.slug}/`} className="pb-chip" aria-current={current === c.slug ? "page" : undefined}>
              <span className="font-cardo">{c.numeral}</span> {c.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Reveal-on-scroll only hides content once this script is running, so the
  // page reads fine without JavaScript.
  useEffect(() => {
    document.documentElement.classList.add("pb-armed");
    return () => document.documentElement.classList.remove("pb-armed");
  }, []);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = PAGES.map((p) => [`/${p.slug}/`, p.label] as const);
  return (
    <header className={`pb-nav ${scrolled ? "is-solid" : ""}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.png" alt="" width={32} height={32} className="h-8 w-8 rounded-lg" />
          <span className="whitespace-nowrap font-cardo text-[19px]">The Preacher</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="pb-navlink">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex"><a href="/app/" className="pb-navlink">Sign in</a></span>
          <a href={APP_STORE_URL} className="pb-navcta">Get the app</a>
          <button
            type="button"
            className="pb-navlink pb-menu-btn"
            aria-expanded={open}
            aria-controls="pb-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div id="pb-mobile-menu" className="pb-mobile-menu lg:hidden">
          {[...links, ["/support/", "Support"] as const, ["/app/", "Sign in"] as const].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

const HERO_SHOTS = [
  { src: "/screenshots/web/home.jpg", label: "Home" },
  { src: "/screenshots/web/sermons.jpg", label: "Library" },
  { src: "/screenshots/web/prepare.jpg", label: "Prepare" },
  { src: "/screenshots/web/preaching.jpg", label: "Preach" },
  { src: "/screenshots/web/chat.jpg", label: "Messages" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [shot, setShot] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [verseStart, setVerseStart] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVerseStart(true), 900);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setShot((s) => (s + 1) % HERO_SHOTS.length), 3200);
    return () => clearInterval(t);
  }, [paused, reduce]);

  return (
    <section
      className="pb-hero"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="pb-hero-rules" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-32 md:grid-cols-[1.15fr_0.85fr] md:pt-40">
        <div>
          <p className="pb-rise text-sm font-semibold text-pb-night-muted" style={{ animationDelay: "60ms" }}>
            Sermon log and study for preachers
          </p>
          <h1 className="pb-rise mt-4 font-cardo text-[clamp(3rem,8vw,6.2rem)] leading-[0.98] text-pb-onion" style={{ animationDelay: "140ms", textWrap: "balance" }}>
            Your ministry, <span className="pb-gilt-text">remembered.</span>
          </h1>
          <p className="pb-rise mt-6 max-w-lg text-lg leading-relaxed text-pb-night-muted" style={{ animationDelay: "240ms" }}>
            Every sermon you’ve written, every place you’ve preached, every service you’ve sat under. Kept in one place
            and ready to preach from, even without a signal.
          </p>
          <div id="download" className="pb-rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "340ms" }}>
            <AppStoreButton dark />
            <span className="hidden sm:inline-flex"><PlayComingSoon dark /></span>
          </div>
          <p className="pb-rise mt-4 text-sm text-pb-night-muted" style={{ animationDelay: "420ms" }}>
            Free to start. Premium is $4.99 a month or $44.99 a year, with 7 days free.
            <span className="sm:hidden"> Android is coming soon.</span>
          </p>
          <p className="mt-10 hidden max-w-md font-cardo text-xl leading-snug text-pb-red-night sm:block" aria-label="2 Timothy 4:2">
            <Typewriter text="Preach the word; be instant in season, out of season." start={verseStart} speed={42} />
            <span className="ml-2 whitespace-nowrap text-sm opacity-75">2 Timothy 4:2</span>
          </p>
        </div>

        <div className="relative mx-auto w-[min(76vw,320px)]">
          <div className="pb-ribbon" aria-hidden="true" />
          <div
            className="pb-hero-phone"
            style={{ transform: `perspective(1200px) rotateY(${tilt.x * 10}deg) rotateX(${-tilt.y * 8}deg)` }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {HERO_SHOTS.map((s, i) => (
              <div key={s.src} className={`pb-hero-shot ${i === shot ? "is-on" : ""}`} aria-hidden={i !== shot}>
                <PhoneFrame src={s.src} alt={`The Preacher app: ${s.label}`} eager={i === 0} />
              </div>
            ))}
          </div>
          <div className="mt-6 hidden flex-wrap justify-center gap-2 sm:flex" role="tablist" aria-label="App screens">
            {HERO_SHOTS.map((s, i) => (
              <button
                key={s.label}
                type="button"
                role="tab"
                aria-selected={i === shot}
                className="pb-shot-tab"
                onClick={() => {
                  setShot(i);
                  setPaused(true);
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-pb-ink px-5 py-12 text-pb-night-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.png" alt="" width={28} height={28} className="h-7 w-7 rounded-lg" />
          <span className="font-cardo text-lg text-pb-onion">The Preacher</span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {PAGES.map((p) => (
            <a key={p.slug} href={`/${p.slug}/`} className="hover:text-pb-onion">{p.label}</a>
          ))}
          <a href="/support/" className="hover:text-pb-onion">Support</a>
          <a href="/app/" className="hover:text-pb-onion">Sign in</a>
          <a href="/privacy/" className="hover:text-pb-onion">Privacy</a>
          <a href="/terms/" className="hover:text-pb-onion">Terms</a>
        </nav>
        <p>© {new Date().getFullYear()} The Preacher</p>
      </div>
    </footer>
  );
}
