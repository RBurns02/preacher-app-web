"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Icons ─────────────────────────────────────────────────────────────── */
const MicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v6a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zm-1 15.93V21H9v2h6v-2h-2v-2.07A8 8 0 0 0 20 11h-2a6 6 0 0 1-12 0H4a8 8 0 0 0 7 7.93z" />
  </svg>
);
const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M3.18 23.18C1.44 22.18 0 20.46 0 18.26V5.74C0 3.54 1.44 1.82 3.18.82c1.74-1 3.74-.8 5.4.28l11.6 6.26c1.64 1.06 2.82 2.86 2.82 4.64 0 1.78-1.18 3.58-2.82 4.64L8.58 22.9c-1.66 1.08-3.66 1.28-5.4.28z" />
  </svg>
);

/* ─── Scroll progress bar ────────────────────────────────────────────────── */
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]" style={{ background: "rgba(28,23,18,0.06)" }}>
      <div ref={barRef} className="h-full" style={{ width: "0%", background: "linear-gradient(90deg, #92400E, #D97706, #F59E0B)", transition: "width 0.05s linear" }} />
    </div>
  );
}

/* ─── useInView ──────────────────────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── FadeUp ─────────────────────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ─── SlideIn ────────────────────────────────────────────────────────────── */
function SlideIn({ children, from = "left", delay = 0, className = "" }: { children: React.ReactNode; from?: "left" | "right"; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.08);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : `translateX(${from === "left" ? "-52px" : "52px"})`,
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ─── ScaleUp ────────────────────────────────────────────────────────────── */
function ScaleUp({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView(0.15);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "scale(1) translateY(0)" : "scale(0.93) translateY(24px)",
      transition: `opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.2, 0.64, 1)`,
    }}>
      {children}
    </div>
  );
}

/* ─── Phone Frame ────────────────────────────────────────────────────────── */
function PhoneFrame({ src, alt, width = 260, height = 530, float = false }: {
  src: string; alt: string; width?: number; height?: number; float?: boolean;
}) {
  return (
    <div className={`relative${float ? " animate-float" : ""}`}>
      <div className="relative overflow-hidden" style={{
        width, height, borderRadius: 44, background: "#17120D",
        boxShadow: "0 0 0 1px rgba(28,23,18,0.10), 0 30px 70px rgba(28,23,18,0.22), inset 0 1px 0 rgba(255,255,255,0.10)",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)" }} />
      </div>
    </div>
  );
}

/* ─── Download Button ────────────────────────────────────────────────────── */
const APP_STORE_URL = "https://apps.apple.com/us/app/the-preacher/id6775250750";

function DownloadButton({ platform, size = "md" }: { platform: "ios" | "android"; size?: "md" | "lg" }) {
  const isLg = size === "lg";
  if (platform === "android") {
    return (
      <div className={`inline-flex items-center gap-3 rounded-2xl font-semibold text-ink/30 border border-ink/[0.08] bg-white/60 cursor-default select-none ${isLg ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"}`}>
        <PlayIcon />
        <span>
          <div className="text-[10px] leading-none mb-0.5">Coming soon to</div>
          <div>Google Play</div>
        </span>
      </div>
    );
  }
  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-2xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95 text-white ${isLg ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"}`}
      style={{ background: "#1C1712", boxShadow: "0 10px 30px rgba(28,23,18,0.25)" }}>
      <AppleIcon />
      <span>
        <div className={`text-[10px] opacity-60 leading-none ${isLg ? "mb-0.5" : ""}`}>Download on the</div>
        <div>App Store</div>
      </span>
    </a>
  );
}

/* ─── Checklist item ─────────────────────────────────────────────────────── */
function CheckItem({ text, color }: { text: string; color: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}1E` }}>
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span className="text-ink/65 text-sm leading-relaxed">{text}</span>
    </li>
  );
}

/* ─── Nav ────────────────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Tour the App", href: "/tour" },
    { label: "For Congregations", href: "#congregation" },
    { label: "Pricing", href: "#pricing" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16"
      style={{ background: "rgba(250,248,243,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(28,23,18,0.07)" }}>
      <a href="/" className="flex items-center gap-2.5">
        <div className="w-11 h-11 rounded-xl flex-shrink-0" style={{ backgroundImage: "url('/icon.png')", backgroundSize: "580%", backgroundPosition: "49% 49%", backgroundRepeat: "no-repeat" }} />
        <span className="text-ink font-bold text-[15px] tracking-tight">The Preacher</span>
      </a>
      <div className="hidden md:flex items-center gap-8">
        {links.map(({ label, href }) => (
          <a key={label} href={href} className="text-ink/55 hover:text-ink text-sm font-medium transition-colors duration-150">{label}</a>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-3">
        <a href="#download" className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #B45309, #D97706)", boxShadow: "0 4px 18px rgba(180,83,9,0.30)" }}>
          Get the App
        </a>
      </div>
      <button className="md:hidden text-ink/60 hover:text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
        <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
          <span className={`block h-0.5 bg-current rounded transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 bg-current rounded transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 bg-current rounded transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>
      {open && (
        <div className="absolute top-16 left-0 right-0 p-4 flex flex-col gap-2 md:hidden"
          style={{ background: "rgba(250,248,243,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(28,23,18,0.07)" }}>
          {links.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              className="px-4 py-3 text-ink/70 hover:text-ink text-sm font-medium rounded-xl hover:bg-ink/[0.04] transition-all">{label}</a>
          ))}
          <a href="#download" onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
            style={{ background: "linear-gradient(135deg, #B45309, #D97706)" }}>
            Get the App
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Bento feature card ─────────────────────────────────────────────────── */
function BentoCard({ icon, title, description, accent = false, className = "", horizontal = false }: {
  icon: React.ReactNode; title: string; description: string; accent?: boolean; className?: string; horizontal?: boolean;
}) {
  return (
    <div className={`relative rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 group ${accent ? "card-gold-border" : "card-border"} ${className}`}
      style={{
        background: accent ? "linear-gradient(135deg, rgba(217,119,6,0.10), rgba(217,119,6,0.03)), #FFFFFF" : "#FFFFFF",
        boxShadow: accent ? "0 12px 40px rgba(180,83,9,0.10)" : "0 8px 30px rgba(28,23,18,0.06)",
      }}>
      <div className={horizontal ? "flex flex-col sm:flex-row sm:items-center gap-5" : "flex flex-col gap-4 h-full"}>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: accent ? "rgba(217,119,6,0.14)" : "rgba(28,23,18,0.05)" }}>
          <div className="w-6 h-6" style={{ color: accent ? "#B45309" : "#4A3F33" }}>{icon}</div>
        </div>
        <div>
          <h3 className={`text-lg font-bold mb-1.5 ${accent ? "text-gold-gradient" : "text-ink"}`}>{title}</h3>
          <p className="text-ink/55 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Marquee shot ───────────────────────────────────────────────────────── */
function MarqueeShot({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52">
      <div className="rounded-[22px] overflow-hidden card-border bg-white" style={{ boxShadow: "0 10px 30px rgba(28,23,18,0.10)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} className="w-full h-auto block" />
      </div>
      <p className="text-center text-ink/40 text-xs font-medium mt-2.5">{label}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Home() {
  const shots = [
    { src: "/screenshots/home.png", label: "Home" },
    { src: "/screenshots/prepare.png", label: "Prepare Mode" },
    { src: "/screenshots/sermons.png", label: "Sermon Library" },
    { src: "/screenshots/bible.png", label: "Bible + Strong's" },
    { src: "/screenshots/preaching-outline.png", label: "Preaching View" },
    { src: "/screenshots/locations.png", label: "Locations Map" },
    { src: "/screenshots/services.png", label: "Timeline" },
    { src: "/screenshots/search.png", label: "Search" },
    { src: "/screenshots/sermon-detail.png", label: "Sermon Detail" },
  ];

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="overflow-hidden">

        {/* ── Hero ── */}
        <section className="relative flex flex-col items-center pt-32 pb-0 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-hero-glow pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold text-gold-700 tracking-wide uppercase animate-fade-up"
              style={{ background: "rgba(217,119,6,0.08)", border: "1px solid rgba(180,83,9,0.22)", animationDelay: "0ms" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600 animate-pulse" />
              Built for Ministers
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] mb-6 animate-fade-up"
              style={{ animationDelay: "120ms" }}>
              <span className="text-ink-gradient">Preach with</span>
              <br />
              <span className="text-gold-gradient">Purpose.</span>
            </h1>

            <p className="text-ink/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto animate-fade-up"
              style={{ animationDelay: "240ms" }}>
              The record of a minister&apos;s life in the Word — every sermon
              written, every place preached, every service attended, kept in
              one place.
            </p>

            <div id="download" className="flex flex-wrap gap-3 justify-center mb-4 animate-fade-up"
              style={{ animationDelay: "360ms" }}>
              <DownloadButton platform="ios" size="lg" />
              <DownloadButton platform="android" size="lg" />
            </div>

            <p className="text-ink/35 text-xs mb-6 animate-fade-up" style={{ animationDelay: "410ms" }}>
              Now on the App Store · 3-day free trial, then $4.99/mo or $44.99/yr
            </p>

            <div className="animate-fade-up" style={{ animationDelay: "460ms" }}>
              <a href="/tour"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[15px] font-semibold border border-gold-600/40 bg-gold-600/[0.07] hover:bg-gold-600/[0.14] hover:border-gold-600/70 transition-colors duration-200 text-gold-700">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
                  <path d="M8 5v14l11-7z" />
                </svg>
                See how the app works
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* Three-phone fan */}
          <div className="relative z-10 mt-16 flex items-end justify-center animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="hidden sm:block relative top-10 -mr-14" style={{ transform: "rotate(-7deg)" }}>
              <PhoneFrame src="/screenshots/preaching.png" alt="The Preacher active sermon mode" width={220} height={450} />
            </div>
            <div className="relative z-10">
              <PhoneFrame src="/screenshots/home.png" alt="The Preacher home screen showing sermon dashboard" width={272} height={556} />
            </div>
            <div className="hidden sm:block relative top-10 -ml-14" style={{ transform: "rotate(7deg)" }}>
              <PhoneFrame src="/screenshots/bible.png" alt="The Preacher Bible study" width={220} height={450} />
            </div>
          </div>

          {/* Fade the phones into the stats band */}
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #FAF8F3 85%)" }} />
        </section>

        {/* ── Stats strip ── */}
        <section className="py-12 px-6" style={{ borderTop: "1px solid rgba(28,23,18,0.06)", borderBottom: "1px solid rgba(28,23,18,0.06)", background: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "Every", label: "Sermon Logged" },
              { value: "Strong's", label: "Concordance Built In" },
              { value: "Full", label: "Offline Access" },
              { value: "Cloud", label: "Sync & Backup" },
            ].map((s, i) => (
              <FadeUp key={s.label} delay={i * 80} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gold-gradient mb-1">{s.value}</div>
                <div className="text-ink/45 text-sm font-medium">{s.label}</div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── Screenshot marquee ── */}
        <section className="py-20">
          <FadeUp className="text-center mb-10 px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold text-ink/50 tracking-wide uppercase"
              style={{ background: "rgba(28,23,18,0.04)", border: "1px solid rgba(28,23,18,0.08)" }}>
              A Look Inside
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ink">
              Every screen, built for the work.
            </h2>
          </FadeUp>
          <div className="marquee overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
            <div className="marquee-track flex gap-6 w-max pr-6">
              {[...shots, ...shots].map((s, i) => (
                <MarqueeShot key={`${s.src}-${i}`} src={s.src} label={s.label} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Features bento ── */}
        <section id="features" className="py-24 px-6" style={{ background: "#FFFFFF", borderTop: "1px solid rgba(28,23,18,0.06)" }}>
          <div className="max-w-6xl mx-auto">
            <FadeUp className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold text-ink/50 tracking-wide uppercase"
                style={{ background: "rgba(28,23,18,0.04)", border: "1px solid rgba(28,23,18,0.08)" }}>
                Everything You Need
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-ink mb-4">
                Your whole ministry.<br />One app.
              </h2>
              <p className="text-ink/50 text-lg max-w-xl mx-auto">
                From the pulpit to the pew — The Preacher keeps your entire ministry history at your fingertips.
              </p>
            </FadeUp>

            <div className="grid md:grid-cols-6 gap-4">
              <FadeUp delay={0} className="md:col-span-4 flex flex-col">
                <BentoCard accent icon={<MicIcon />} title="Log in 30 Seconds"
                  description="Title, location, date — and you're done. Scriptures, outline, notes, tags, and attachments are there when you want them. Batch Log handles conferences and revivals with per-night entries." className="h-full" />
              </FadeUp>
              <FadeUp delay={80} className="md:col-span-2 flex flex-col">
                <BentoCard icon={<ZapIcon />} title="Prepare Mode"
                  description="Pulpit-ready view with a message timer, auto-scroll teleprompter, and screen-stays-awake." className="h-full" />
              </FadeUp>
              <FadeUp delay={160} className="md:col-span-2 flex flex-col">
                <BentoCard icon={<BookIcon />} title="Study Bible + Strong's"
                  description="KJV and ASV built in, fully offline. Tap any KJV word for the original Hebrew or Greek." className="h-full" />
              </FadeUp>
              <FadeUp delay={240} className="md:col-span-2 flex flex-col">
                <BentoCard icon={<MapPinIcon />} title="Library & Timeline"
                  description="One card per message in the Library. Your full ministry history in date order in the Timeline." className="h-full" />
              </FadeUp>
              <FadeUp delay={320} className="md:col-span-2 flex flex-col">
                <BentoCard icon={<ChartIcon />} title="Analytics & Reports"
                  description="Top scriptures, top locations, charts, and a Ministry Report PDF you can export and share." className="h-full" />
              </FadeUp>
              <FadeUp delay={400} className="md:col-span-6 flex flex-col">
                <BentoCard horizontal icon={<CloudIcon />} title="Offline-First, Synced to the Cloud"
                  description="Everything saves to your phone first — full access with no signal, syncs automatically when you're back online. Deleted items go to a Recycle Bin for 30 days, and your whole record is backed up to your account." />
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Spotlight: Sermon Log ── */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <SlideIn from="left" className="flex-1 flex justify-center lg:justify-start">
              <PhoneFrame src="/screenshots/sermon-detail.png" alt="The Preacher sermon detail" width={240} height={490} />
            </SlideIn>
            <SlideIn from="right" delay={150} className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold text-gold-700 uppercase tracking-wide"
                style={{ background: "rgba(217,119,6,0.08)", border: "1px solid rgba(180,83,9,0.20)" }}>
                Sermon Log
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="text-ink-gradient">Every message,</span>
                <br />
                <span className="text-gold-gradient">preserved forever.</span>
              </h2>
              <p className="text-ink/55 text-lg leading-relaxed mb-8">
                Log a sermon in about 30 seconds — title, location, date.
                Everything else is optional: scriptures, outline, notes, tags,
                photos, audio. Location autocomplete pulls from past services so
                you&apos;re not retyping the same church every week.
              </p>
              <ul className="flex flex-col gap-3 text-left">
                {[
                  "Library view: one card per sermon, tracks every time and place it was preached",
                  "Timeline view: full ministry history in date order, searchable and filterable",
                  "Batch Log for conferences and revivals — per-night entries with speaker and notes",
                  '"I Attended" flow for services where someone else preached',
                ].map((item) => <CheckItem key={item} text={item} color="#B45309" />)}
              </ul>
            </SlideIn>
          </div>
        </section>

        {/* ── Spotlight: Bible Study ── */}
        <section className="py-24 px-6" style={{ background: "#FFFFFF", borderTop: "1px solid rgba(28,23,18,0.06)", borderBottom: "1px solid rgba(28,23,18,0.06)" }}>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
            <SlideIn from="right" className="flex-1 flex justify-center lg:justify-end">
              <PhoneFrame src="/screenshots/bible.png" alt="The Preacher Bible study with verse highlights" width={240} height={490} />
            </SlideIn>
            <SlideIn from="left" delay={150} className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold uppercase tracking-wide"
                style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.20)", color: "#7C3AED" }}>
                Bible Study
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="text-ink-gradient">Study like you</span>
                <br />
                <span style={{ background: "linear-gradient(135deg, #6D28D9, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>mean it.</span>
              </h2>
              <p className="text-ink/55 text-lg leading-relaxed mb-8">
                KJV and ASV in one fast offline reader. Tap any KJV word to
                see the original Hebrew or Greek with Strong&apos;s
                Concordance: definitions, cross-references, and a plain-English
                meaning for every word. Add it straight to a sermon outline.
              </p>
              <ul className="flex flex-col gap-3 text-left">
                {[
                  "Strong's Concordance — original Hebrew/Greek for every KJV word",
                  "Word Study Notebook keeps studied words with your personal notes",
                  "Highlight verses, write notes, jump to any exact verse",
                  "Add any verse directly to a sermon outline from the reader",
                ].map((item) => <CheckItem key={item} text={item} color="#7C3AED" />)}
              </ul>
            </SlideIn>
          </div>
        </section>

        {/* ── Spotlight: Congregation ── */}
        <section id="congregation" className="py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <SlideIn from="left" className="flex-1 flex justify-center lg:justify-start">
              <PhoneFrame src="/screenshots/services.png" alt="The Preacher ministry timeline" width={240} height={490} />
            </SlideIn>
            <SlideIn from="right" delay={150} className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold uppercase tracking-wide"
                style={{ background: "rgba(13,148,136,0.07)", border: "1px solid rgba(13,148,136,0.22)", color: "#0F766E" }}>
                For the Congregation
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="text-ink-gradient">Follow every message.</span>
                <br />
                <span style={{ background: "linear-gradient(135deg, #0F766E, #14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Never forget a word.</span>
              </h2>
              <p className="text-ink/55 text-lg leading-relaxed mb-8">
                You don&apos;t have to be behind the pulpit to use The Preacher.
                Congregation members get the same tools — log the services you
                attend, use the &ldquo;I Attended&rdquo; flow so it goes into
                your timeline, highlight scripture, and build a personal record
                of every message that moved you.
              </p>
              <ul className="flex flex-col gap-3 text-left">
                {[
                  '"I Attended" flow — log any service you sit in on, not just ones you preach',
                  "Notes, scripture highlights, and tags — all the same tools ministers use",
                  "Your full attendance history in the Timeline view",
                  "Study the same Bible with Strong's Concordance built in",
                ].map((item) => <CheckItem key={item} text={item} color="#0F766E" />)}
              </ul>
            </SlideIn>
          </div>
        </section>

        {/* ── Quote ── */}
        <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(180deg, rgba(217,119,6,0.05), rgba(217,119,6,0.02))" }}>
          <ScaleUp className="max-w-3xl mx-auto">
            <div className="text-6xl text-gold-600/40 font-serif leading-none mb-6">&ldquo;</div>
            <p className="text-2xl md:text-3xl font-semibold text-ink/85 leading-relaxed mb-6">
              A minister who records what God gives them never runs out of what to say.
            </p>
            <p className="text-ink/35 text-sm font-medium uppercase tracking-widest">— The Mission of The Preacher</p>
          </ScaleUp>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-24 px-6" style={{ background: "#FFFFFF", borderTop: "1px solid rgba(28,23,18,0.06)" }}>
          <div className="max-w-4xl mx-auto">
            <FadeUp className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold text-gold-700 tracking-wide uppercase"
                style={{ background: "rgba(217,119,6,0.08)", border: "1px solid rgba(180,83,9,0.22)" }}>
                Simple Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-ink mb-4">
                Try everything free<br />for 3 days.
              </h2>
              <p className="text-ink/50 text-lg max-w-xl mx-auto">
                One subscription unlocks the whole app. Start with a free trial — cancel anytime in your App Store settings.
              </p>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { name: "Monthly", price: "$4.99", per: "/month", badge: null, note: "3 days free, then $4.99 per month" },
                { name: "Yearly", price: "$44.99", per: "/year", badge: "Save 25%", note: "3 days free, then $44.99 per year" },
              ].map((plan, i) => (
                <FadeUp key={plan.name} delay={i * 100} className="flex flex-col">
                  <div className={`relative rounded-3xl p-8 flex flex-col gap-5 h-full text-center transition-all duration-300 hover:-translate-y-1 ${plan.badge ? "card-gold-border" : "card-border"}`}
                    style={{
                      background: plan.badge ? "linear-gradient(135deg, rgba(217,119,6,0.08), rgba(217,119,6,0.02)), #FFFFFF" : "#FFFFFF",
                      boxShadow: plan.badge ? "0 16px 44px rgba(180,83,9,0.12)" : "0 8px 30px rgba(28,23,18,0.06)",
                    }}>
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold text-white uppercase tracking-wide"
                        style={{ background: "linear-gradient(135deg, #B45309, #D97706)" }}>
                        {plan.badge}
                      </div>
                    )}
                    <div className="text-ink/50 text-sm font-semibold uppercase tracking-widest">{plan.name}</div>
                    <div>
                      <span className="text-5xl font-black text-gold-gradient">{plan.price}</span>
                      <span className="text-ink/45 text-base font-medium">{plan.per}</span>
                    </div>
                    <p className="text-ink/45 text-sm">{plan.note}</p>
                    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
                      className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${plan.badge ? "text-white" : "text-ink border border-ink/15 hover:bg-ink/[0.04]"}`}
                      style={plan.badge ? { background: "linear-gradient(135deg, #B45309, #D97706)", boxShadow: "0 4px 18px rgba(180,83,9,0.30)" } : {}}>
                      Start Free Trial
                    </a>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp className="text-center mt-8">
              <p className="text-ink/35 text-xs max-w-md mx-auto leading-relaxed">
                Auto-renews after the trial. Manage or cancel anytime in your App Store subscription settings. One subscription covers all your devices signed in with the same account.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Final CTA — dark inversion band ── */}
        <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#17120D" }}>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-72 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.16), transparent 70%)" }} />
          <div className="max-w-3xl mx-auto text-center relative">
            <FadeUp>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8"
                style={{ background: "linear-gradient(135deg, rgba(217,119,6,0.3), rgba(217,119,6,0.1))", border: "1px solid rgba(217,119,6,0.3)", boxShadow: "0 0 60px rgba(217,119,6,0.2)" }}>
                <div className="w-10 h-10 text-gold-500"><MicIcon /></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
                <span className="text-silver-gradient">Start logging</span>
                <br />
                <span className="text-gold-gradient-bright">your ministry today.</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                Now on the App Store. Every sermon you preach deserves to be remembered.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-4">
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95 bg-white text-black hover:bg-white/90 px-7 py-4 text-base"
                  style={{ boxShadow: "0 4px 20px rgba(255,255,255,0.15)" }}>
                  <AppleIcon />
                  <span>
                    <div className="text-[10px] opacity-60 leading-none mb-0.5">Download on the</div>
                    <div>App Store</div>
                  </span>
                </a>
                <div className="inline-flex items-center gap-3 rounded-2xl font-semibold text-white/30 border border-white/[0.08] bg-white/[0.04] cursor-default select-none px-7 py-4 text-base">
                  <PlayIcon />
                  <span>
                    <div className="text-[10px] leading-none mb-0.5">Coming soon to</div>
                    <div>Google Play</div>
                  </span>
                </div>
              </div>
              <p className="text-white/30 text-xs">3-day free trial, then $4.99/mo or $44.99/yr</p>
            </FadeUp>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(28,23,18,0.07)" }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl flex-shrink-0" style={{ backgroundImage: "url('/icon.png')", backgroundSize: "580%", backgroundPosition: "49% 49%", backgroundRepeat: "no-repeat" }} />
              <span className="text-ink/65 font-semibold text-sm">The Preacher</span>
            </div>
            <div className="flex items-center gap-6">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" },
                { label: "Support", href: "/support" },
                { label: "Contact", href: "mailto:thepreacherapp@gmail.com" },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="text-ink/40 hover:text-ink/80 text-xs font-medium transition-colors duration-150">{label}</a>
              ))}
            </div>
            <p className="text-ink/30 text-xs">© {new Date().getFullYear()} The Preacher. All rights reserved.</p>
          </div>
        </footer>

      </main>
    </>
  );
}
