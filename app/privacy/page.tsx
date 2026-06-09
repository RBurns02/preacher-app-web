import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — The Preacher",
  description: "Privacy Policy for The Preacher app.",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "#07070F", minHeight: "100vh" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 h-16 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(7,7,15,0.95)" }}>
        <a href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="The Preacher" className="w-8 h-8 rounded-xl object-contain" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span className="text-white font-bold text-[15px] tracking-tight">The Preacher</span>
        </a>
        <a href="/" className="text-white/50 hover:text-white text-sm font-medium transition-colors">← Back to Home</a>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 9, 2025</p>

        <div className="flex flex-col gap-10" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Overview</h2>
            <p>
              The Preacher (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information
              when you use The Preacher mobile application (&quot;the App&quot;) and website at
              thepreacherapp.com (&quot;the Site&quot;).
            </p>
            <p className="mt-3">
              By using the App or Site, you agree to the collection and use of information
              in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
            <h3 className="font-semibold text-white/80 mb-2">Account Information</h3>
            <p>
              When you create an account, we collect your name and email address.
              This is used to identify your account and sync your data across devices.
            </p>
            <h3 className="font-semibold text-white/80 mt-4 mb-2">Content You Create</h3>
            <p>
              The App stores content you create, including sermon logs, Bible highlights,
              verse notes, sermon outlines, and service records. This content is associated
              with your account and synced to secure cloud storage.
            </p>
            <h3 className="font-semibold text-white/80 mt-4 mb-2">Usage Data</h3>
            <p>
              We may collect anonymized usage data such as features used and session
              frequency to improve the App. This data does not identify you personally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
            <ul className="flex flex-col gap-2 list-none">
              {[
                "To provide and maintain the App and its features",
                "To sync your content across your devices",
                "To authenticate your account and keep it secure",
                "To send important account or service notifications",
                "To improve the App based on anonymized usage patterns",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#F59E0B" }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Data Storage & Security</h2>
            <p>
              Your data is stored securely using Firebase (Google Cloud). We use
              industry-standard encryption in transit and at rest. Your sermon logs,
              Bible notes, and highlights are private to your account and are never
              shared with other users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">We Do Not Sell Your Data</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              Your sermons, notes, and highlights belong to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Third-Party Services</h2>
            <p>
              The App uses the following third-party services, each with their own
              privacy policies:
            </p>
            <ul className="flex flex-col gap-2 mt-3 list-none">
              {[
                "Firebase (Google) — authentication and cloud data storage",
                "Apple App Store / Google Play — app distribution",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#F59E0B" }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="flex flex-col gap-2 mt-3 list-none">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your account and all associated data",
                "Export your sermon and note data",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#F59E0B" }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To delete your account and data, go to Settings → Account &amp; Security
              inside the App, or contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Children&apos;s Privacy</h2>
            <p>
              The App is not directed at children under 13. We do not knowingly collect
              personal information from children under 13. If you believe we have
              inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you
              of significant changes by updating the date at the top of this page.
              Continued use of the App after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how your data is handled,
              please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-white font-semibold">The Preacher</p>
              <p className="mt-1">
                <a href="mailto:support@thepreacherapp.com" className="transition-colors" style={{ color: "#F59E0B" }}>
                  support@thepreacherapp.com
                </a>
              </p>
              <p className="mt-1">thepreacherapp.com</p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-white/20 text-sm">© 2025 The Preacher. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="/" className="text-white/30 hover:text-white/60 text-sm transition-colors">Home</a>
          <a href="/#features" className="text-white/30 hover:text-white/60 text-sm transition-colors">Features</a>
          <a href="/tour" className="text-white/30 hover:text-white/60 text-sm transition-colors">How It Works</a>
        </div>
      </footer>
    </main>
  );
}
