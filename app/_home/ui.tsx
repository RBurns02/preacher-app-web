"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export const APP_STORE_URL = "https://apps.apple.com/us/app/the-preacher/id6775250750";

/* ─── Motion helpers ───────────────────────────────────────────────────── */

/** True when the visitor asked their system for less motion. */
export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduce;
}

/** Becomes true once the element has scrolled into view (and stays true). */
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/** Fades and lifts its children in when they scroll into view. Content is in
 *  the page from the start; only the motion waits. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const { ref, inView } = useInView(0.12);
  return (
    <div
      ref={ref}
      className={`pb-reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ["--pb-y" as string]: `${y}px` }}
    >
      {children}
    </div>
  );
}

/** Counts up to [to] when it scrolls into view. */
export function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, duration]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

/** Types [text] out a character at a time once [start] is true. The full text
 *  is always available to screen readers. */
export function Typewriter({
  text,
  start = true,
  speed = 38,
  onDone,
  className = "",
  caret = true,
}: {
  text: string;
  start?: boolean;
  speed?: number;
  onDone?: () => void;
  className?: string;
  caret?: boolean;
}) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    done.current = false;
    setN(0);
  }, [text]);
  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setN(text.length);
      return;
    }
    if (n >= text.length) {
      if (!done.current) {
        done.current = true;
        onDone?.();
      }
      return;
    }
    const t = setTimeout(() => setN((v) => v + 1), speed);
    return () => clearTimeout(t);
  }, [start, n, text, speed, reduce, onDone]);
  const typing = start && n < text.length;
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, n)}
        {caret && typing && <span className="pb-caret" />}
      </span>
    </span>
  );
}

/* ─── Pieces ───────────────────────────────────────────────────────────── */

/** A real app screenshot in a phone frame. */
export function PhoneFrame({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`pb-phone ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={660} height={1434} loading={eager ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}

export function AppStoreButton({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`pb-store ${dark ? "pb-store-light" : "pb-store-dark"}`}
      aria-label="Download The Preacher on the App Store"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[11px] opacity-70">Download on the</span>
        <span className="block text-[17px] font-semibold">App Store</span>
      </span>
    </a>
  );
}

export function PlayComingSoon({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`pb-store pb-store-muted ${dark ? "is-dark" : ""}`} aria-label="Android version coming soon to Google Play">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M3.18 23.18C1.44 22.18 0 20.46 0 18.26V5.74C0 3.54 1.44 1.82 3.18.82c1.74-1 3.74-.8 5.4.28l11.6 6.26c1.64 1.06 2.82 2.86 2.82 4.64 0 1.78-1.18 3.58-2.82 4.64L8.58 22.9c-1.66 1.08-3.66 1.28-5.4.28z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[11px] opacity-70">Coming soon to</span>
        <span className="block text-[15px] font-semibold">Google Play</span>
      </span>
    </span>
  );
}

/** A chapter heading: small numeral, Cardo title, optional red-letter epigraph. */
export function ChapterHead({
  numeral,
  kicker,
  title,
  verse,
  reference,
  dark = false,
}: {
  numeral: string;
  kicker: string;
  title: ReactNode;
  verse?: string;
  reference?: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className={`flex items-baseline gap-3 text-sm font-semibold ${dark ? "text-pb-night-muted" : "text-pb-muted"}`}>
        <span className="font-cardo text-lg">{numeral}</span>
        <span>{kicker}</span>
      </div>
      <h2 className={`mt-3 font-cardo text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] ${dark ? "text-pb-onion" : "text-pb-ink"}`} style={{ textWrap: "balance" }}>
        {title}
      </h2>
      {verse && (
        <p className={`mt-5 max-w-xl font-cardo text-lg leading-relaxed ${dark ? "text-pb-red-night" : "text-pb-red"}`}>
          {verse}
          {reference && <span className="ml-2 whitespace-nowrap text-sm opacity-80">{reference}</span>}
        </p>
      )}
    </Reveal>
  );
}

export function Check({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li className="flex gap-3">
      <svg viewBox="0 0 24 24" className={`mt-1 h-4 w-4 flex-none ${dark ? "text-pb-onion" : "text-pb-ink"}`} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
      <span>{children}</span>
    </li>
  );
}
