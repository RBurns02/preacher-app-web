"use client";

import { useState } from "react";

/* ─── Icons (inline SVG to avoid dependencies) ─────────────────────────── */
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
const HighlightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
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

/* ─── Phone Frame ───────────────────────────────────────────────────────── */
function PhoneFrame({
  src,
  alt,
  width = 260,
  height = 530,
  float = false,
  glowColor = "gold",
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  float?: boolean;
  glowColor?: "gold" | "purple" | "teal";
}) {
  const glowBg =
    glowColor === "gold"
      ? "rgba(217,119,6,0.2)"
      : glowColor === "purple"
      ? "rgba(139,92,246,0.15)"
      : "rgba(20,184,166,0.15)";
  const borderColor =
    glowColor === "gold"
      ? "rgba(217,119,6,0.2)"
      : glowColor === "teal"
      ? "rgba(20,184,166,0.2)"
      : "rgba(255,255,255,0.07)";
  return (
    <div className={`relative${float ? " animate-float" : ""}`}>
      <div
        className="absolute inset-0 blur-3xl scale-110"
        style={{ borderRadius: 44, background: glowBg }}
      />
      <div
        className="relative overflow-hidden"
        style={{
          width,
          height,
          borderRadius: 44,
          background: "#0e0e1c",
          boxShadow: `0 0 0 1px ${borderColor}, 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Phone Mockup (hero) ───────────────────────────────────────────────── */
function PhoneMockup() {
  return (
    <PhoneFrame
      src="/screenshots/home.png"
      alt="The Preacher home screen showing sermon dashboard"
      float
    />
  );
}

/* ─── Feature Card ──────────────────────────────────────────────────────── */
function FeatureCard({
  icon,
  title,
  description,
  accent = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 group ${
        accent ? "card-gold-border" : "card-border"
      }`}
      style={{
        background: accent
          ? "linear-gradient(135deg, rgba(217,119,6,0.08), rgba(217,119,6,0.02))"
          : "rgba(255,255,255,0.025)",
        boxShadow: accent
          ? "0 0 40px rgba(217,119,6,0.1), 0 4px 24px rgba(0,0,0,0.4)"
          : "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
          accent ? "bg-gold-600/20" : "bg-white/[0.06]"
        }`}
      >
        <div className={`w-6 h-6 ${accent ? "text-gold-500" : "text-white/70"}`}>
          {icon}
        </div>
      </div>
      <div>
        <h3
          className={`text-base font-bold mb-1.5 ${
            accent ? "text-gold-gradient" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ─── Download Button ───────────────────────────────────────────────────── */
function DownloadButton({
  platform,
  href,
  size = "md",
}: {
  platform: "ios" | "android";
  href?: string;
  size?: "md" | "lg";
}) {
  const isLg = size === "lg";
  return (
    <a
      href={href ?? "#"}
      className={`inline-flex items-center gap-3 rounded-2xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
        platform === "ios"
          ? "bg-white text-black hover:bg-white/90"
          : "bg-white/[0.08] text-white border border-white/10 hover:bg-white/[0.12]"
      } ${isLg ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"}`}
      style={
        platform === "ios"
          ? { boxShadow: "0 4px 20px rgba(255,255,255,0.15)" }
          : {}
      }
    >
      {platform === "ios" ? <AppleIcon /> : <PlayIcon />}
      <span>
        <div className={`text-[10px] opacity-60 leading-none ${isLg ? "mb-0.5" : ""}`}>
          {platform === "ios" ? "Download on the" : "Get it on"}
        </div>
        <div>{platform === "ios" ? "App Store" : "Google Play"}</div>
      </span>
    </a>
  );
}

/* ─── Nav ───────────────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16"
      style={{
        background: "rgba(7,7,15,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
      {/* Logo */}
      <a href="/" className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 rounded-xl bg-gold-600/20 flex items-center justify-center">
          <div className="w-4 h-4 text-gold-500">
            <MicIcon />
          </div>
        </div>
        <span className="text-white font-bold text-[15px] tracking-tight">The Preacher</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Features", href: "#features" },
          { label: "Tour the App", href: "/tour" },
          { label: "For Ministers", href: "#features" },
          { label: "For Congregations", href: "#congregation" },
        ].map(({ label, href }) => (
          <a key={label} href={href}
            className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-150">
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-3">
        <a href="#download"
          className="px-4 py-2 rounded-xl text-sm font-semibold text-black transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #D97706, #F59E0B)",
            boxShadow: "0 4px 20px rgba(217,119,6,0.35)",
          }}>
          Get the App
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button className="md:hidden text-white/60 hover:text-white"
        onClick={() => setOpen(!open)}>
        <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
          <span className={`block h-0.5 bg-current rounded transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 bg-current rounded transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 bg-current rounded transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-16 left-0 right-0 p-4 flex flex-col gap-2 md:hidden"
          style={{
            background: "rgba(14,14,28,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
          {[
            { label: "Features", href: "#features" },
            { label: "For Ministers", href: "#features" },
            { label: "For Congregations", href: "#congregation" },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-white/70 hover:text-white text-sm font-medium rounded-xl hover:bg-white/[0.04] transition-all">
              {label}
            </a>
          ))}
          <a href="#download" onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-black text-center"
            style={{ background: "linear-gradient(135deg, #D97706, #F59E0B)" }}>
            Get the App
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />

      <main className="overflow-hidden">
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-hero-glow pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(217,119,6,0.12), transparent 70%)" }} />

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold text-gold-400 tracking-wide uppercase"
                style={{
                  background: "rgba(217,119,6,0.1)",
                  border: "1px solid rgba(217,119,6,0.25)",
                }}>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                Built for Ministers
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
                <span className="text-silver-gradient">Preach with</span>
                <br />
                <span className="text-gold-gradient">Purpose.</span>
              </h1>

              <p className="text-white/55 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                The Preacher is the ministry companion for pastors, evangelists,
                and teachers — and for every member of the congregation. Log
                every sermon you preach or hear, study Scripture deeper, and
                grow in your faith.
              </p>

              {/* Download buttons */}
              <div id="download" className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <DownloadButton platform="ios" size="lg" />
                <DownloadButton platform="android" size="lg" />
              </div>

              {/* Social proof */}
              <p className="text-white/25 text-sm">
                Coming soon to iOS &amp; Android
              </p>

              {/* Tour link */}
              <a href="/tour" className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors duration-150"
                style={{ color: "#F59E0B" }}>
                See how the app works
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Phone mockup */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <PhoneMockup />
            </div>
          </div>

          {/* Scroll hint */}
          <a href="#features" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 hover:text-white/50 transition-colors animate-bounce">
            <ChevronDownIcon />
          </a>
        </section>

        {/* ── Stats strip ── */}
        <section className="py-12 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "Every", label: "Sermon Logged" },
              { value: "Multiple", label: "Bible Versions" },
              { value: "Full", label: "Offline Access" },
              { value: "Cloud", label: "Sync & Backup" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gold-gradient mb-1">
                  {s.value}
                </div>
                <div className="text-white/40 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features grid ── */}
        <section id="features" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold text-white/50 tracking-wide uppercase"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                Everything You Need
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-silver-gradient mb-4">
                Your whole ministry.<br />One app.
              </h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto">
                From the pulpit to the pew — The Preacher keeps your entire
                ministry history at your fingertips.
              </p>
            </div>

            {/* 3-column grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FeatureCard
                icon={<MicIcon />}
                title="Log Every Sermon"
                description="Record your message title, scripture references, notes, and outline. Build a lifetime library of every word you've preached."
                accent
              />
              <FeatureCard
                icon={<BookIcon />}
                title="Deep Bible Study"
                description="Read in multiple Bible versions. Highlight verses in multiple colors, add personal notes, and search your entire annotation history."
              />
              <FeatureCard
                icon={<ZapIcon />}
                title="Prepare Mode"
                description="Build your sermon outline before you preach. Organize scriptures, talking points, and illustrations — all in one place."
              />
              <FeatureCard
                icon={<MapPinIcon />}
                title="Track Locations"
                description="See every city and church you've preached in on an interactive map. Watch your ministry territory grow over time."
              />
              <FeatureCard
                icon={<CloudIcon />}
                title="Syncs Everywhere"
                description="Your sermons and notes are securely backed up to the cloud and sync instantly across all your devices."
              />
              <FeatureCard
                icon={<HighlightIcon />}
                title="Works Offline"
                description="Full access to your Bible, sermons, and notes even without an internet connection. Ministry doesn't pause for bad signal."
              />
            </div>
          </div>
        </section>

        {/* ── Feature spotlight: Sermon Log ── */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            {/* Visual */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <PhoneFrame
                src="/screenshots/preaching.png"
                alt="The Preacher active sermon mode with timer and outline"
                width={240}
                height={490}
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold text-gold-400 uppercase tracking-wide"
                style={{ background: "rgba(217,119,6,0.1)", border: "1px solid rgba(217,119,6,0.2)" }}>
                Sermon Log
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="text-silver-gradient">Every message,</span>
                <br />
                <span className="text-gold-gradient">preserved forever.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Log the full details of every sermon you preach — title,
                scripture, structured outline, location, congregation size, and
                personal notes. Your entire preaching history in one place.
              </p>
              <ul className="flex flex-col gap-3 text-left">
                {[
                  "Structured outline builder with multiple points",
                  "Scripture references linked to the built-in Bible reader",
                  "Track where and when you preached each message",
                  "Quick Log mode for fast on-the-go entries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(217,119,6,0.15)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Feature spotlight: Bible Study ── */}
        <section className="py-24 px-6" style={{ background: "rgba(255,255,255,0.015)" }}>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Visual */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <PhoneFrame
                src="/screenshots/bible.jpeg"
                alt="The Preacher Bible study with verse highlights"
                width={240}
                height={490}
                glowColor="purple"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold text-purple-400 uppercase tracking-wide"
                style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}>
                Bible Study
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="text-silver-gradient">Study like you</span>
                <br />
                <span style={{ background: "linear-gradient(135deg, #8B5CF6, #C4B5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  mean it.
                </span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                A full Bible reader with multiple versions — with
                multi-color highlighting, personal verse notes, and a searchable
                annotation library that travels with you everywhere.
              </p>
              <ul className="flex flex-col gap-3 text-left">
                {[
                  "Highlight in yellow, blue, orange, or pink",
                  "Write personal notes on any verse",
                  "Search all your highlights and notes instantly",
                  "Tap a scripture in a sermon to jump straight to it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(139,92,246,0.15)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Feature spotlight: Congregation ── */}
        <section id="congregation" className="py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            {/* Visual */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <PhoneFrame
                src="/logo.png"
                alt="The Preacher app"
                width={240}
                height={490}
                glowColor="teal"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold uppercase tracking-wide"
                style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.2)", color: "#2DD4BF" }}>
                For the Congregation
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="text-silver-gradient">Follow every message.</span>
                <br />
                <span style={{ background: "linear-gradient(135deg, #14B8A6, #67E8F9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Never forget a word.
                </span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                You don&apos;t have to be behind the pulpit to grow. The Preacher
                gives congregation members the same powerful tools — log every
                sermon you hear, take notes in real time, highlight scripture
                that speaks to you, and build a personal record of every message
                that moves you.
              </p>
              <ul className="flex flex-col gap-3 text-left">
                {[
                  "Log any sermon you hear — not just ones you preach",
                  "Take real-time notes while the message is being delivered",
                  "Highlight scriptures from the message in your Bible",
                  "Build a personal library of every word that impacted you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(20,184,166,0.15)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Quote ── */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl text-gold-600/30 font-serif leading-none mb-6">&ldquo;</div>
            <p className="text-2xl md:text-3xl font-semibold text-white/80 leading-relaxed mb-6">
              A minister who records what God gives them never runs out of
              what to say.
            </p>
            <p className="text-white/30 text-sm font-medium uppercase tracking-widest">
              — The Mission of The Preacher
            </p>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section id="download" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Glow */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-64 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.12), transparent 70%)" }} />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8"
                style={{
                  background: "linear-gradient(135deg, rgba(217,119,6,0.3), rgba(217,119,6,0.1))",
                  border: "1px solid rgba(217,119,6,0.3)",
                  boxShadow: "0 0 60px rgba(217,119,6,0.2)",
                }}>
                <div className="w-10 h-10 text-gold-500"><MicIcon /></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
                <span className="text-silver-gradient">Start logging</span>
                <br />
                <span className="text-gold-gradient">your ministry today.</span>
              </h2>
              <p className="text-white/45 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                Free to download. Every sermon you preach deserves to be remembered.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <DownloadButton platform="ios" size="lg" />
                <DownloadButton platform="android" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-gold-600/20 flex items-center justify-center">
                <div className="w-3.5 h-3.5 text-gold-500"><MicIcon /></div>
              </div>
              <span className="text-white/60 font-semibold text-sm">The Preacher</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Use", "Support", "Contact"].map((link) => (
                <a key={link} href="#"
                  className="text-white/30 hover:text-white/70 text-xs font-medium transition-colors duration-150">
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} The Preacher. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
