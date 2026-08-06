import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — The Preacher",
  description: "Terms of Use for The Preacher app.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default function TermsPage() {
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
        <h1 className="text-4xl font-black text-white mb-2">Terms of Use</h1>
        <p className="text-white/40 text-sm mb-1">Effective Date: June 9, 2026</p>
        <p className="text-white/40 text-sm mb-12">Last Updated: June 9, 2026</p>

        <div className="flex flex-col gap-10" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>

          <Section title="1. Acceptance of Terms">
            <p>
              By downloading, installing, or using The Preacher mobile application (&quot;App&quot;),
              you agree to be bound by these Terms of Use. If you do not agree, do not use the App.
            </p>
          </Section>

          <Section title="2. Use of the App">
            <p>The Preacher is a personal ministry tool designed for logging sermons, studying scripture, and tracking ministry activity. You agree to use the App only for lawful purposes and in a manner consistent with its intended use.</p>
            <p className="mt-3">You may not:</p>
            <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Use the App to distribute unlawful, harmful, or offensive content</li>
              <li>Attempt to gain unauthorized access to any part of our systems</li>
              <li>Use the App for any commercial purpose without our written consent</li>
            </ul>
          </Section>

          <Section title="3. Accounts">
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activity that occurs under your account. Notify us immediately at{" "}
              <a
                href="mailto:thepreacherapp@gmail.com"
                className="underline hover:text-white transition-colors"
                style={{ color: "rgba(251,191,36,0.85)" }}
              >
                thepreacherapp@gmail.com
              </a>{" "}
              if you suspect unauthorized access.
            </p>
          </Section>

          <Section title="4. Your Content">
            <p>
              All sermon notes, highlights, and other content you create within the App (&quot;Your
              Content&quot;) remain yours. You grant us a limited license to store and sync Your
              Content solely to provide the App&apos;s features. We do not sell or share Your Content
              with third parties.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              The App, including its design, code, and content (excluding Your Content), is owned by
              The Preacher and protected by applicable intellectual property laws. You may not copy,
              modify, or distribute any part of the App without our express written permission.
            </p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>
              The App is provided &quot;as is&quot; without warranties of any kind, express or implied,
              including but not limited to warranties of merchantability, fitness for a particular
              purpose, or non-infringement. We do not warrant that the App will be error-free or
              uninterrupted.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, The Preacher shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of or inability to use the App, even if we have been advised of the possibility
              of such damages.
            </p>
          </Section>

          <Section title="8. Termination">
            <p>
              We reserve the right to suspend or terminate your access to the App at any time for
              violation of these Terms. You may delete your account at any time from within the App
              or by contacting us at{" "}
              <a
                href="mailto:thepreacherapp@gmail.com"
                className="underline hover:text-white transition-colors"
                style={{ color: "rgba(251,191,36,0.85)" }}
              >
                thepreacherapp@gmail.com
              </a>
              .
            </p>
          </Section>

          <Section title="9. Changes to These Terms">
            <p>
              We may update these Terms from time to time. We will notify you of significant changes
              by updating the &quot;Last Updated&quot; date above. Continued use of the App after changes
              constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by the laws of the United States, without regard to conflict
              of law principles.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              Questions about these Terms? Email us at{" "}
              <a
                href="mailto:thepreacherapp@gmail.com"
                className="underline hover:text-white transition-colors"
                style={{ color: "rgba(251,191,36,0.85)" }}
              >
                thepreacherapp@gmail.com
              </a>
              .
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
