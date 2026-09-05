import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — The Preacher",
  description: "Get help with The Preacher app.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Question({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="text-white font-semibold mb-2">{q}</p>
      <div style={{ color: "rgba(255,255,255,0.65)" }}>{children}</div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <main style={{ background: "#07070F", minHeight: "100vh" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-6 h-16 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(7,7,15,0.95)" }}
      >
        <a href="/" className="flex items-center gap-2.5">
          <div
            className="w-11 h-11 rounded-xl flex-shrink-0"
            style={{
              backgroundImage: "url('/icon.png')",
              backgroundSize: "580%",
              backgroundPosition: "49% 49%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <span className="text-white font-bold text-[15px] tracking-tight">The Preacher</span>
        </a>
        <a href="/" className="text-white/50 hover:text-white text-sm font-medium transition-colors">
          ← Back to Home
        </a>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-white mb-4">Support</h1>
        <p className="mb-16" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
          Have a question or running into an issue? We&apos;re here to help. Reach us at{" "}
          <a
            href="mailto:thepreacherapp@gmail.com"
            className="underline hover:text-white transition-colors"
            style={{ color: "rgba(251,191,36,0.85)" }}
          >
            thepreacherapp@gmail.com
          </a>{" "}
          and we&apos;ll get back to you as soon as possible.
        </p>

        <div className="flex flex-col gap-12" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>

          <Section title="Frequently Asked Questions">
            <Question q="How do I log a sermon?">
              <p>
                Tap the <strong className="text-white">+</strong> button and choose{" "}
                <strong className="text-white">Log a Sermon</strong>. Fill in the title, date,
                location, scripture references, and any notes. You can log a full message in under
                30 seconds and add more detail later.
              </p>
            </Question>

            <Question q="How do I use Prepare Mode?">
              <p>
                Open a sermon and tap <strong className="text-white">Prepare</strong> to build your
                outline in blocks — content and scripture in any order, arranged with arrows. When
                it&apos;s time to preach, tap <strong className="text-white">Start Message</strong>:
                the screen stays awake and a message timer runs. Auto-Scroll lives in the{" "}
                <strong className="text-white">Customize</strong> button (the tune icon), with a
                speed slider to set your pace. When you finish, one tap logs the service for you.
              </p>
            </Question>

            <Question q="How do I highlight Bible verses?">
              <p>
                In the Bible tab, tap any verse to select it, then tap the{" "}
                <strong className="text-white">Highlight</strong> button and choose a color. Your
                highlights are saved and synced to your account. Tap a highlighted verse anytime to
                view or edit its notes.
              </p>
            </Question>

            <Question q="Does the app work without an internet connection?">
              <p>
                Yes. Both Bible translations (KJV and ASV) are available fully offline.
                Sermons, highlights, and notes are stored on your device first and synced to the
                cloud when you reconnect.
              </p>
            </Question>

            <Question q="How do I recover a deleted sermon?">
              <p>
                Deleted sermons and services go to the Recycle Bin. Open{" "}
                <strong className="text-white">Settings → Recycle Bin</strong>, tap the item, and
                choose <strong className="text-white">Restore</strong>. Items in the Recycle Bin are
                permanently deleted after 30 days.
              </p>
            </Question>

            <Question q="What is the 'I Attended' option?">
              <p>
                If you heard a message rather than preached it, tap{" "}
                <strong className="text-white">I Attended</strong> when logging. The entry is saved
                to your Timeline with its own tag — and you can record who preached it — so you can
                distinguish sermons you preached from ones you attended.
              </p>
            </Question>

            <Question q="How do I delete my account?">
              <p>
                Go to{" "}
                <strong className="text-white">Settings → Account → Delete Account</strong>. This
                permanently removes all your data from our servers. If you need assistance, email us
                at{" "}
                <a
                  href="mailto:thepreacherapp@gmail.com"
                  className="underline hover:text-white transition-colors"
                  style={{ color: "rgba(251,191,36,0.85)" }}
                >
                  thepreacherapp@gmail.com
                </a>{" "}
                and we will delete it manually within 48 hours.
              </p>
            </Question>
          </Section>

          <Section title="Contact Us">
            <p>
              For anything not covered above — bug reports, feature requests, or account issues —
              email us directly:
            </p>
            <p className="mt-4">
              <a
                href="mailto:thepreacherapp@gmail.com"
                className="text-lg font-semibold underline hover:text-white transition-colors"
                style={{ color: "rgba(251,191,36,0.85)" }}
              >
                thepreacherapp@gmail.com
              </a>
            </p>
            <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              We typically respond within 1–2 business days.
            </p>
          </Section>

        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-8 px-6 text-center text-sm"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}
      >
        <p>© {new Date().getFullYear()} The Preacher. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="/support" className="hover:text-white transition-colors">Support</a>
        </div>
      </footer>
    </main>
  );
}
