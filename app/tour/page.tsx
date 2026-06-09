"use client";

import { useState } from "react";

/* ─── Nav icons ─────────────────────────────────────────────────────────── */
const NavHomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);
const NavMicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v6a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zm-1 15.93V21H9v2h6v-2h-2v-2.07A8 8 0 0 0 20 11h-2a6 6 0 0 1-12 0H4a8 8 0 0 0 7 7.93z" />
  </svg>
);
const NavListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-full h-full">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <circle cx="3" cy="6" r="1" fill="currentColor" stroke="none" /><circle cx="3" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="3" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const NavBookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const NavSearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const NavSettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
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
const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ─── App bottom nav bar (used in all CSS mockups) ──────────────────────── */
function AppBottomNav({ active }: { active: "home" | "sermons" | "services" | "bible" | "settings" }) {
  const items = [
    { id: "home", label: "Home", Icon: NavHomeIcon },
    { id: "sermons", label: "Sermons", Icon: NavMicIcon },
    { id: "services", label: "Services", Icon: NavListIcon },
    { id: "bible", label: "Bible", Icon: NavBookIcon },
    { id: "settings", label: "Settings", Icon: NavSettingsIcon },
  ];
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-2 pt-2 pb-3"
      style={{ background: "#0c0c1a", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      {items.map(({ id, label, Icon }) => (
        <div key={id} className="flex flex-col items-center gap-0.5 w-10"
          style={{ color: id === active ? "#3B82F6" : "rgba(255,255,255,0.3)" }}>
          <div className="w-[18px] h-[18px]"><Icon /></div>
          <span style={{ fontSize: 7.5, fontWeight: 500 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Phone frame ───────────────────────────────────────────────────────── */
function PhoneFrame({
  children,
  glowColor = "gold",
}: {
  children: React.ReactNode;
  glowColor?: "gold" | "blue" | "purple" | "teal" | "red";
}) {
  const glowMap: Record<string, string> = {
    gold: "rgba(217,119,6,0.2)",
    blue: "rgba(59,130,246,0.2)",
    purple: "rgba(139,92,246,0.15)",
    teal: "rgba(20,184,166,0.15)",
    red: "rgba(239,68,68,0.15)",
  };
  const borderMap: Record<string, string> = {
    gold: "rgba(217,119,6,0.25)",
    blue: "rgba(59,130,246,0.25)",
    purple: "rgba(139,92,246,0.2)",
    teal: "rgba(20,184,166,0.2)",
    red: "rgba(239,68,68,0.2)",
  };
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-3xl scale-110"
        style={{ borderRadius: 44, background: glowMap[glowColor] }} />
      <div className="relative overflow-hidden"
        style={{
          width: 260,
          height: 530,
          borderRadius: 44,
          background: "#08080f",
          boxShadow: `0 0 0 1px ${borderMap[glowColor]}, 0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}>
        {children}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)" }} />
      </div>
    </div>
  );
}

/* ─── Screenshot frame (real photos) ───────────────────────────────────── */
function ScreenshotFrame({ src, alt, glowColor = "gold" }: { src: string; alt: string; glowColor?: "gold" | "blue" | "purple" | "teal" }) {
  const glowMap: Record<string, string> = {
    gold: "rgba(217,119,6,0.2)",
    blue: "rgba(59,130,246,0.2)",
    purple: "rgba(139,92,246,0.15)",
    teal: "rgba(20,184,166,0.15)",
  };
  const borderMap: Record<string, string> = {
    gold: "rgba(217,119,6,0.25)",
    blue: "rgba(59,130,246,0.25)",
    purple: "rgba(139,92,246,0.2)",
    teal: "rgba(20,184,166,0.2)",
  };
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-3xl scale-110"
        style={{ borderRadius: 44, background: glowMap[glowColor] }} />
      <div className="relative overflow-hidden"
        style={{
          width: 260,
          height: 530,
          borderRadius: 44,
          background: "#08080f",
          boxShadow: `0 0 0 1px ${borderMap[glowColor]}, 0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)" }} />
      </div>
    </div>
  );
}

/* ─── CSS Screen Mockups ────────────────────────────────────────────────── */

function SermonLoggerScreen() {
  return (
    <PhoneFrame glowColor="gold">
      <div className="absolute inset-0 flex flex-col" style={{ background: "#08080f", color: "white", fontSize: 11 }}>
        {/* Header */}
        <div className="px-4 pt-6 pb-3 flex items-center gap-3" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, lineHeight: 1 }}>‹</div>
          <span className="font-bold text-sm flex-1">Log Sermon</span>
          <span style={{ color: "#3B82F6", fontSize: 12, fontWeight: 600 }}>Save</span>
        </div>

        {/* Form body */}
        <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 overflow-hidden">
          {/* Title */}
          <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(59,130,246,0.4)" }}>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 8.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Title</div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>Walking in Faith</div>
          </div>

          {/* Scripture */}
          <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 8.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Scripture</div>
            <div style={{ fontWeight: 600, fontSize: 12, color: "#3B82F6" }}>Hebrews 11:1–6</div>
          </div>

          {/* Date + Location row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 8.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Date</div>
              <div style={{ fontWeight: 600, fontSize: 11 }}>June 1, 2025</div>
            </div>
            <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 8.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Duration</div>
              <div style={{ fontWeight: 600, fontSize: 11 }}>45 min</div>
            </div>
          </div>

          {/* Church */}
          <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 8.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>Church / Location</div>
            <div style={{ fontWeight: 600, fontSize: 11 }}>Grace Fellowship Church</div>
          </div>

          {/* Outline section */}
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginTop: 2 }}>Outline</div>
          {[
            { tag: "Intro", text: "Faith is the substance of things hoped for..." },
            { tag: "Point 1", text: "Abel's offering — faith in action" },
            { tag: "Conclusion", text: "Without faith it is impossible to please Him" },
          ].map((p) => (
            <div key={p.tag} className="rounded-xl p-2.5 flex items-start gap-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="rounded-md px-1.5 py-0.5 flex-shrink-0" style={{ background: "rgba(217,119,6,0.15)", color: "#F59E0B", fontSize: 8, fontWeight: 700 }}>{p.tag}</span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 9.5, lineHeight: 1.4 }}>{p.text}</span>
            </div>
          ))}
        </div>

        <AppBottomNav active="sermons" />
      </div>
    </PhoneFrame>
  );
}

function PrepareScreen() {
  return (
    <PhoneFrame glowColor="gold">
      <div className="absolute inset-0 flex flex-col" style={{ background: "#08080f", color: "white", fontSize: 11 }}>
        {/* Header */}
        <div className="px-4 pt-6 pb-3 flex items-center gap-3" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, lineHeight: 1 }}>‹</div>
          <span className="font-bold text-sm flex-1">Prepare</span>
        </div>

        <div className="flex-1 px-4 py-3 flex flex-col gap-3 overflow-hidden">
          {/* Sermon card */}
          <div className="rounded-xl p-3" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))", border: "1px solid rgba(59,130,246,0.25)" }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 2 }}>Walking in Faith</div>
            <div style={{ color: "#3B82F6", fontSize: 10, fontWeight: 600 }}>Hebrews 11:1–6</div>
          </div>

          {/* Outline builder */}
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2 }}>Message Outline</div>

          {[
            { label: "Introduction", text: "Open with the definition of faith — what does it mean to truly believe?", active: false },
            { label: "Point 1", text: "Abel's offering showed that true faith requires action, not just belief.", active: true },
            { label: "Point 2", text: "Enoch walked with God — faith sustained as a daily lifestyle.", active: false },
            { label: "Point 3", text: "Noah prepared the ark before a single drop of rain fell.", active: false },
            { label: "Conclusion", text: "Without faith, it is impossible to please God — our call to action.", active: false },
          ].map((point) => (
            <div key={point.label} className="rounded-xl p-2.5" style={{
              background: point.active ? "rgba(59,130,246,0.1)" : "rgba(255,255,255,0.04)",
              border: point.active ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ color: point.active ? "#60A5FA" : "rgba(255,255,255,0.35)", fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>{point.label}</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 9.5, lineHeight: 1.4 }}>{point.text}</div>
            </div>
          ))}

          {/* Start button */}
          <button className="w-full rounded-xl py-3 font-bold text-white text-sm"
            style={{ background: "linear-gradient(135deg, #DC2626, #EF4444)", boxShadow: "0 4px 20px rgba(220,38,38,0.4)", marginTop: "auto" }}>
            ● Start Preaching
          </button>
        </div>

        <AppBottomNav active="sermons" />
      </div>
    </PhoneFrame>
  );
}

function ServicesScreen() {
  return (
    <PhoneFrame glowColor="teal">
      <div className="absolute inset-0 flex flex-col" style={{ background: "#08080f", color: "white", fontSize: 11 }}>
        {/* Header */}
        <div className="px-4 pt-6 pb-3 flex items-center justify-between" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <span className="font-bold text-sm">Services</span>
          <span style={{ color: "#3B82F6", fontSize: 20, lineHeight: 1, fontWeight: 300 }}>+</span>
        </div>

        <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 overflow-hidden">
          {/* Filter chips */}
          <div className="flex gap-2">
            {["All", "This Year", "Past"].map((f, i) => (
              <span key={f} className="rounded-full px-3 py-1" style={{
                background: i === 0 ? "#3B82F6" : "rgba(255,255,255,0.06)",
                color: i === 0 ? "white" : "rgba(255,255,255,0.4)",
                fontSize: 9, fontWeight: 600,
              }}>{f}</span>
            ))}
          </div>

          {/* Service cards */}
          {[
            { name: "Sunday Morning Service", church: "Springhill Pentecostal", date: "Jun 8, 2025", sermons: 2, color: "#3B82F6" },
            { name: "Wednesday Night Bible Study", church: "Grace Fellowship", date: "Jun 4, 2025", sermons: 1, color: "#8B5CF6" },
            { name: "Youth Rally", church: "City Church", date: "May 31, 2025", sermons: 3, color: "#14B8A6" },
            { name: "Sunday Morning Service", church: "Bethel Assembly", date: "May 25, 2025", sermons: 1, color: "#3B82F6" },
            { name: "Revival Night", church: "New Life Church", date: "May 18, 2025", sermons: 2, color: "#F59E0B" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl p-3 flex items-center gap-3"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${s.color}22` }}>
                <div className="w-3.5 h-3.5" style={{ color: s.color }}>
                  <NavListIcon />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div style={{ fontWeight: 700, fontSize: 10.5, marginBottom: 2, color: "rgba(255,255,255,0.9)" }} className="truncate">{s.name}</div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 8.5 }}>{s.church} · {s.date}</div>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span style={{ color: s.color, fontSize: 9, fontWeight: 700 }}>{s.sermons} sermon{s.sermons !== 1 ? "s" : ""}</span>
                <div style={{ color: "rgba(255,255,255,0.2)" }}><ChevronRightIcon /></div>
              </div>
            </div>
          ))}
        </div>

        <AppBottomNav active="services" />
      </div>
    </PhoneFrame>
  );
}

/* ─── Reusable section layout ───────────────────────────────────────────── */
function TourSection({
  flip = false,
  visual,
  badge,
  badgeColor,
  headline,
  description,
  items,
  bg,
}: {
  flip?: boolean;
  visual: React.ReactNode;
  badge: string;
  badgeColor: { text: string; bg: string; border: string };
  headline: React.ReactNode;
  description: string;
  items: string[];
  bg?: string;
}) {
  return (
    <section className="py-24 px-6" style={bg ? { background: bg } : {}}>
      <div className={`max-w-6xl mx-auto flex flex-col items-center gap-16 ${flip ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className={`flex-1 flex ${flip ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}>
          {visual}
        </div>
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold uppercase tracking-wide"
            style={{ background: badgeColor.bg, border: `1px solid ${badgeColor.border}`, color: badgeColor.text }}>
            {badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            {headline}
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-8">{description}</p>
          <ul className="flex flex-col gap-3 text-left">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: badgeColor.bg }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={badgeColor.text} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
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
  );
}

/* ─── Nav ───────────────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16"
      style={{ background: "rgba(7,7,15,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <a href="/" className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(217,119,6,0.2)" }}>
          <div className="w-4 h-4" style={{ color: "#F59E0B" }}><NavMicIcon /></div>
        </div>
        <span className="text-white font-bold text-[15px] tracking-tight">The Preacher</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "← Back to Home", href: "/" },
          { label: "Features", href: "/#features" },
          { label: "For Congregations", href: "/#congregation" },
        ].map(({ label, href }) => (
          <a key={label} href={href} className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-150">{label}</a>
        ))}
      </div>

      <a href="#download" className="hidden md:block px-4 py-2 rounded-xl text-sm font-semibold text-black transition-all duration-200 hover:scale-105"
        style={{ background: "linear-gradient(135deg, #D97706, #F59E0B)", boxShadow: "0 4px 20px rgba(217,119,6,0.35)" }}>
        Get the App
      </a>

      <button className="md:hidden text-white/60 hover:text-white" onClick={() => setOpen(!open)}>
        <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
          <span className={`block h-0.5 bg-current rounded transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 bg-current rounded transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 bg-current rounded transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 p-4 flex flex-col gap-2 md:hidden"
          style={{ background: "rgba(14,14,28,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { label: "← Back to Home", href: "/" },
            { label: "Features", href: "/#features" },
            { label: "For Congregations", href: "/#congregation" },
          ].map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              className="px-4 py-3 text-white/70 hover:text-white text-sm font-medium rounded-xl hover:bg-white/[0.04] transition-all">{label}</a>
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
export default function TourPage() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden" style={{ background: "#07070F" }}>

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-20 px-6 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top, rgba(217,119,6,0.12), transparent 70%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold uppercase tracking-wide"
              style={{ background: "rgba(217,119,6,0.1)", border: "1px solid rgba(217,119,6,0.25)", color: "#F59E0B" }}>
              App Tour
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              <span style={{ background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Every screen,
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #D97706, #F59E0B, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                explained.
              </span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-xl mx-auto">
              A screen-by-screen walkthrough of The Preacher — built for ministers
              and congregation members alike.
            </p>
          </div>
        </section>

        {/* ── Screen 1: Home ── */}
        <TourSection
          visual={<ScreenshotFrame src="/screenshots/home.png" alt="The Preacher home screen" glowColor="gold" />}
          badge="Home Screen"
          badgeColor={{ text: "#F59E0B", bg: "rgba(217,119,6,0.1)", border: "rgba(217,119,6,0.25)" }}
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Your ministry at
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #D97706, #F59E0B, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                a glance.
              </span>
            </>
          }
          description="The moment you open The Preacher, everything that matters is right in front of you. Your stats, your most recent sermons, the verse of the day, and quick-access buttons to everything you need — all in one place."
          items={[
            "Your sermon count and ministry stats at a glance",
            "Today's verse of the day to center your spirit",
            "Quick shortcuts to log, prepare, or start preaching",
            "Your most recent services and sermons front and center",
          ]}
        />

        {/* ── Screen 2: Sermon Logger ── */}
        <TourSection
          flip
          bg="rgba(255,255,255,0.015)"
          visual={<SermonLoggerScreen />}
          badge="Sermon Log"
          badgeColor={{ text: "#F59E0B", bg: "rgba(217,119,6,0.1)", border: "rgba(217,119,6,0.25)" }}
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Every sermon,
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #D97706, #F59E0B, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                captured in detail.
              </span>
            </>
          }
          description="Whether you're behind the pulpit or sitting in the pew — log it all. Record the title, scripture references, your outline, the church, how long the message ran, and personal notes. Nothing gets lost."
          items={[
            "Title, scripture, date, and duration in one place",
            "Build a structured outline with as many points as you need",
            "Log the church name and location for every entry",
            "Works for preachers AND congregation members taking notes",
          ]}
        />

        {/* ── Screen 3: Prepare Mode ── */}
        <TourSection
          visual={<PrepareScreen />}
          badge="Prepare Mode"
          badgeColor={{ text: "#60A5FA", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.25)" }}
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Build your message
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #3B82F6, #93C5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                before you preach.
              </span>
            </>
          }
          description="Walk into the pulpit prepared. Write out your full outline ahead of time — introduction, main points, scriptures, and conclusion — so when it's time to preach, every word is ready. One tap and you go live."
          items={[
            "Build a full outline before the service starts",
            "Add scripture references to each point",
            "Write talking points and illustrations",
            "Tap 'Start Preaching' to go live when you're ready",
          ]}
        />

        {/* ── Screen 4: Live Preaching ── */}
        <TourSection
          flip
          bg="rgba(255,255,255,0.015)"
          visual={<ScreenshotFrame src="/screenshots/preaching.png" alt="The Preacher live preaching mode" glowColor="blue" />}
          badge="Live Preaching Mode"
          badgeColor={{ text: "#F87171", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.25)" }}
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Preach with
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #EF4444, #FCA5A5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                everything you need.
              </span>
            </>
          }
          description="Tap Start and live mode activates — a running timer, your full outline, and all your scripture references, optimized for the pulpit. No fumbling through notes. No forgetting your points. Just preach."
          items={[
            "Real-time sermon timer keeps you on track",
            "Your full outline visible at all times",
            "Scripture references one tap away",
            "Save everything the moment you finish",
          ]}
        />

        {/* ── Screen 5: Bible Reader ── */}
        <TourSection
          visual={<ScreenshotFrame src="/screenshots/bible.jpeg" alt="The Preacher Bible study screen" glowColor="purple" />}
          badge="Bible"
          badgeColor={{ text: "#C4B5FD", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.25)" }}
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Study the Word,
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #8B5CF6, #C4B5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                your way.
              </span>
            </>
          }
          description="A full Bible reader across multiple versions. Read, highlight in four colors, write personal notes on any verse, and add scriptures directly to a sermon or service with a single tap."
          items={[
            "Multiple Bible versions available",
            "Highlight verses in yellow, blue, orange, or pink",
            "Write personal notes on any verse",
            "Add any verse directly to a sermon or service",
          ]}
        />

        {/* ── Screen 6: Services ── */}
        <TourSection
          flip
          bg="rgba(255,255,255,0.015)"
          visual={<ServicesScreen />}
          badge="Services"
          badgeColor={{ text: "#2DD4BF", bg: "rgba(20,184,166,0.1)", border: "rgba(20,184,166,0.25)" }}
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Track every service
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #14B8A6, #67E8F9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                you&apos;ve been part of.
              </span>
            </>
          }
          description="Beyond individual sermons, track the full services — Sunday mornings, Wednesday nights, revivals, and more. Group multiple sermons under one service and build a complete record of every gathering you've attended or led."
          items={[
            "Group multiple sermons under one service",
            "Log the church name, city, and date",
            "See your full ministry timeline at a glance",
            "Great for both preachers and regular attendees",
          ]}
        />

        {/* ── CTA ── */}
        <section id="download" className="py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              <span style={{ background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Ready to get started?
              </span>
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Download The Preacher and take your ministry to the next level.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#" className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-black text-base transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: "white", boxShadow: "0 4px 20px rgba(255,255,255,0.15)" }}>
                <AppleIcon />
                Download for iOS
              </a>
              <a href="#" className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-white text-base border border-white/10 bg-white/[0.08] transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/[0.12]">
                <PlayIcon />
                Download for Android
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="py-10 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-white/20 text-sm">© 2025 The Preacher. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="/" className="text-white/30 hover:text-white/60 text-sm transition-colors">Home</a>
            <a href="/#features" className="text-white/30 hover:text-white/60 text-sm transition-colors">Features</a>
            <a href="/#congregation" className="text-white/30 hover:text-white/60 text-sm transition-colors">For Congregations</a>
          </div>
        </footer>

      </main>
    </>
  );
}
