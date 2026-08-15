"use client";

import { useState } from "react";

/* ─── Icons ─────────────────────────────────────────────────────────────── */
const MicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v6a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zm-1 15.93V21H9v2h6v-2h-2v-2.07A8 8 0 0 0 20 11h-2a6 6 0 0 1-12 0H4a8 8 0 0 0 7 7.93z" />
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

/* ─── Phone frame ────────────────────────────────────────────────────────── */
function PhoneFrame({ src, alt, glowColor = "gold" }: { src: string; alt: string; glowColor?: "gold" | "blue" | "purple" | "teal" | "red" }) {
  const glows: Record<string, [string, string]> = {
    gold:   ["rgba(217,119,6,0.2)",    "rgba(217,119,6,0.25)"],
    blue:   ["rgba(59,130,246,0.2)",   "rgba(59,130,246,0.25)"],
    purple: ["rgba(139,92,246,0.15)",  "rgba(139,92,246,0.2)"],
    teal:   ["rgba(20,184,166,0.15)",  "rgba(20,184,166,0.2)"],
    red:    ["rgba(239,68,68,0.15)",   "rgba(239,68,68,0.2)"],
  };
  const [bg, border] = glows[glowColor];
  return (
    <div className="relative flex-shrink-0">
      <div className="absolute inset-0 blur-3xl scale-110" style={{ borderRadius: 44, background: bg }} />
      <div className="relative overflow-hidden" style={{
        width: 260, height: 530, borderRadius: 44, background: "#08080f",
        boxShadow: `0 0 0 1px ${border}, 0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)`,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)" }} />
      </div>
    </div>
  );
}

/* ─── Step section ───────────────────────────────────────────────────────── */
function Step({
  number,
  flip = false,
  src,
  alt,
  glowColor = "gold",
  label,
  headline,
  description,
  items,
  bg,
}: {
  number: string;
  flip?: boolean;
  src: string;
  alt: string;
  glowColor?: "gold" | "blue" | "purple" | "teal" | "red";
  label: string;
  headline: React.ReactNode;
  description: string;
  items: string[];
  bg?: string;
}) {
  const accentColors: Record<string, { text: string; bg: string; border: string; check: string }> = {
    gold:   { text: "#F59E0B", bg: "rgba(217,119,6,0.12)",   border: "rgba(217,119,6,0.3)",   check: "#D97706" },
    blue:   { text: "#60A5FA", bg: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.3)",  check: "#3B82F6" },
    purple: { text: "#C4B5FD", bg: "rgba(139,92,246,0.12)",  border: "rgba(139,92,246,0.3)",  check: "#8B5CF6" },
    teal:   { text: "#2DD4BF", bg: "rgba(20,184,166,0.12)",  border: "rgba(20,184,166,0.3)",  check: "#14B8A6" },
    red:    { text: "#FCA5A5", bg: "rgba(239,68,68,0.12)",   border: "rgba(239,68,68,0.3)",   check: "#EF4444" },
  };
  const c = accentColors[glowColor];

  return (
    <section className="py-20 px-6" style={bg ? { background: bg } : {}}>
      <div className={`max-w-6xl mx-auto flex flex-col items-center gap-12 lg:gap-20 ${flip ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

        {/* Phone */}
        <div className={`flex-1 flex ${flip ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}>
          <PhoneFrame src={src} alt={alt} glowColor={glowColor} />
        </div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Step number */}
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-5">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg font-black flex-shrink-0"
              style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>
              {number}
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: c.text }}>
              {label}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            {headline}
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-8">{description}</p>

          <ul className="flex flex-col gap-3 text-left">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: c.bg }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={c.check} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
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

/* ─── Nav ────────────────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16"
      style={{ background: "rgba(7,7,15,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <a href="/" className="flex items-center gap-2.5">
        <div className="w-11 h-11 rounded-xl flex-shrink-0" style={{ backgroundImage: "url('/icon.png')", backgroundSize: "580%", backgroundPosition: "49% 49%", backgroundRepeat: "no-repeat" }} />
        <span className="text-white font-bold text-[15px] tracking-tight">The Preacher</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "← Home", href: "/" },
          { label: "Features", href: "/#features" },
          { label: "For Congregations", href: "/#congregation" },
        ].map(({ label, href }) => (
          <a key={label} href={href} className="text-white/50 hover:text-white text-sm font-medium transition-colors">{label}</a>
        ))}
      </div>

      <a href="#download" className="hidden md:block px-4 py-2 rounded-xl text-sm font-semibold text-black transition-all hover:scale-105"
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
            { label: "← Home", href: "/" },
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

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden" style={{ background: "#07070F" }}>

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-16 px-6 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top, rgba(217,119,6,0.12), transparent 70%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold uppercase tracking-wide"
              style={{ background: "rgba(217,119,6,0.1)", border: "1px solid rgba(217,119,6,0.25)", color: "#F59E0B" }}>
              How It Works
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              <span style={{ background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                From download
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #D97706, #F59E0B, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                to the pulpit.
              </span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-xl mx-auto">
              Seven steps that take you from opening the app for the first time
              to preaching with everything you need — and logging every word after.
            </p>
          </div>
        </section>

        {/* ── Step 1: Your Dashboard ── */}
        <Step
          number="1"
          src="/screenshots/home.png"
          alt="The Preacher home dashboard"
          glowColor="gold"
          label="Open the App"
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Everything you need,</span>
              <br />
              <span style={{ background: "linear-gradient(135deg,#D97706,#F59E0B,#FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>right up front.</span>
            </>
          }
          description="The moment you open The Preacher, your dashboard shows you everything at a glance — your sermon count, streak, verse of the day, recent sermons, and quick actions. Whether you're a minister or a congregation member, your ministry starts here."
          items={[
            "Your total sermons, streak, and series count on the home screen",
            "Today's verse of the day to center your spirit",
            "Quick shortcuts to log, prepare, or start preaching",
            "Your most recent sermons always one tap away",
          ]}
        />

        {/* ── Step 2: Prepare ── */}
        <Step
          number="2"
          flip
          bg="rgba(255,255,255,0.015)"
          src="/screenshots/prepare.png"
          alt="The Preacher prepare mode"
          glowColor="blue"
          label="Build Your Message"
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Write your outline</span>
              <br />
              <span style={{ background: "linear-gradient(135deg,#3B82F6,#93C5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>before you preach.</span>
            </>
          }
          description="Before you step behind the pulpit, build your full message in Prepare Mode. Add your title, scriptures, and each point as an ordered stack of content and scripture blocks. When you're ready — tap Start and you're live."
          items={[
            "Each outline point is a stack of content and scripture blocks in any order",
            "Verse text fills in automatically — no manual typing",
            "Tap-to-edit cards with autosave",
            "Tap 'Start Message' to go live the moment you're ready",
          ]}
        />

        {/* ── Step 3: Preach Live ── */}
        <Step
          number="3"
          src="/screenshots/preaching.png"
          alt="The Preacher live preaching mode"
          glowColor="red"
          label="Go Live"
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Preach with nothing</span>
              <br />
              <span style={{ background: "linear-gradient(135deg,#EF4444,#FCA5A5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>in your way.</span>
            </>
          }
          description="Live mode activates your message timer, puts your full outline on screen, and keeps your screen awake. Auto-scroll teleprompter keeps pace with you. Finish and log the service with one tap."
          items={[
            "Real-time message timer keeps you on track",
            "Auto-scroll teleprompter — adjustable text size for the pulpit",
            "Screen stays awake the entire time",
            "One tap to stop, log the service, and file it into your timeline",
          ]}
        />

        {/* ── Step 4: Log It ── */}
        <Step
          number="4"
          flip
          bg="rgba(255,255,255,0.015)"
          src="/screenshots/sermons.png"
          alt="The Preacher sermons list"
          glowColor="gold"
          label="Your Sermon Library"
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Every message,</span>
              <br />
              <span style={{ background: "linear-gradient(135deg,#D97706,#F59E0B,#FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>saved forever.</span>
            </>
          }
          description="Every sermon you preach — or hear — is logged to your personal library. Browse by series, filter by date, and revisit any message you've ever given. Your entire preaching history in one place."
          items={[
            "Every sermon stored with title, scripture, and date",
            "Organize by series and filter however you need",
            "See your total count, streak, and series at the top",
            "Congregation members can log sermons they've heard too",
          ]}
        />

        {/* ── Step 5: Study the Bible ── */}
        <Step
          number="5"
          src="/screenshots/bible.png"
          alt="The Preacher Bible study"
          glowColor="purple"
          label="Study the Word"
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Highlight, note,</span>
              <br />
              <span style={{ background: "linear-gradient(135deg,#8B5CF6,#C4B5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>and dig deeper.</span>
            </>
          }
          description="Four translations built in: KJV, ASV, ESV, NIV. Tap any KJV word to pull up its original Hebrew or Greek with Strong's Concordance — full definitions, cross-references, and plain-English meaning. Add any verse straight to a sermon."
          items={[
            "Strong's Concordance for every KJV word — tap to see the original language",
            "Word Study Notebook keeps studied words with your personal notes",
            "Highlight in yellow, blue, orange, or pink — write notes on any verse",
            "Add any verse directly to a sermon outline without leaving the Bible",
          ]}
        />

        {/* ── Step 6: Ministry Timeline ── */}
        <Step
          number="6"
          flip
          bg="rgba(255,255,255,0.015)"
          src="/screenshots/services.png"
          alt="The Preacher ministry timeline"
          glowColor="teal"
          label="Your Ministry Timeline"
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Your full history,</span>
              <br />
              <span style={{ background: "linear-gradient(135deg,#14B8A6,#67E8F9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>every service attended.</span>
            </>
          }
          description="The Timeline view in the Sermons tab shows every service you've preached or attended — Sunday mornings, Wednesday nights, revivals — in chronological order. Searchable and filterable."
          items={[
            "Full ministry history in date order",
            "Every service with church, location, and sermons attached",
            "Filter by location, speaker, or date range",
            "Congregation members can log services they attended too",
          ]}
        />

        {/* ── Step 7: Search Everything ── */}
        <Step
          number="7"
          src="/screenshots/search.png"
          alt="The Preacher search"
          glowColor="blue"
          label="Find Anything"
          headline={
            <>
              <span style={{ background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Your entire history,</span>
              <br />
              <span style={{ background: "linear-gradient(135deg,#3B82F6,#93C5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>instantly searchable.</span>
            </>
          }
          description="Need to find that sermon on Hebrews from last spring? Or every time you've preached on faith? Global search cuts across your sermons, scriptures, and notes in seconds. Save searches so your filters are always ready."
          items={[
            "Search across your entire library by keyword, scripture, or location",
            "Save searches — your filters stay ready for next time",
            "Filter by type: sermons you preached, services you attended, favorites",
            "Find any message, highlight, or note you've ever created",
          ]}
        />

        {/* ── CTA ── */}
        <section id="download" className="py-24 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold uppercase tracking-wide"
              style={{ background: "rgba(217,119,6,0.1)", border: "1px solid rgba(217,119,6,0.25)", color: "#F59E0B" }}>
              Ready to start?
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              <span style={{ background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Download The Preacher.
              </span>
            </h2>
            <p className="text-white/40 text-lg mb-10">For ministers. For congregations. For everyone who loves the Word.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#" className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-black text-base transition-all hover:scale-105"
                style={{ background: "white", boxShadow: "0 4px 20px rgba(255,255,255,0.15)" }}>
                <AppleIcon />Download for iOS
              </a>
              <a href="#" className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-white text-base border border-white/10 bg-white/[0.08] transition-all hover:scale-105 hover:bg-white/[0.12]">
                <PlayIcon />Download for Android
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="py-10 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-white/20 text-sm">© {new Date().getFullYear()} The Preacher. All rights reserved.</p>
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
