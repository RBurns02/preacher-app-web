import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — The Preacher",
  description: "Privacy Policy for The Preacher app.",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "#FAF8F3", minHeight: "100vh" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 h-16 border-b"
        style={{ borderColor: "rgba(28,23,18,0.07)", background: "rgba(250,248,243,0.95)" }}>
        <a href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="w-11 h-11 rounded-xl flex-shrink-0" style={{ backgroundImage: "url('/icon.png')", backgroundSize: "580%", backgroundPosition: "49% 49%", backgroundRepeat: "no-repeat" }} />
          <span className="text-ink font-bold text-[15px] tracking-tight">The Preacher</span>
        </a>
        <a href="/" className="text-ink/55 hover:text-ink text-sm font-medium transition-colors">← Back to Home</a>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-ink mb-2">Privacy Policy</h1>
        <p className="text-ink/45 text-sm mb-1">Effective Date: June 9, 2026</p>
        <p className="text-ink/45 text-sm mb-12">Last Updated: August 13, 2026</p>

        <div className="flex flex-col gap-10" style={{ color: "rgba(28,23,18,0.68)", lineHeight: 1.8 }}>

          <Section title="1. Introduction">
            <p>
              The Preacher (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, store, and safeguard your
              information when you use The Preacher mobile application (&quot;App&quot;) on iOS and
              Android devices.
            </p>
            <p className="mt-3">
              By using the App, you agree to the collection and use of information as
              described in this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <SubHeading>Information You Provide</SubHeading>
            <BulletList items={[
              "Account Information — Your email address and password when you create an account",
              "Sermon & Ministry Records — Sermon titles, dates, locations, scripture references, and notes you log",
              "Bible Study Data — Highlights, annotations, verse notes, and word studies you add while reading",
              "Message Preparation Notes — Content you create in the message preparation feature",
              "Photos You Attach — Images you choose to attach to a sermon or service",
            ]} />

            <SubHeading>Information Collected Automatically</SubHeading>
            <BulletList items={[
              "Location Names — When you log a sermon, the App records the location name you enter to display on your preaching history. The App never reads your device's GPS; only the text you type is stored.",
              "Scanned Notes — The Scan Notes feature accesses your camera or photo library to perform text recognition (OCR). This processing happens entirely on your device.",
              "Usage & Diagnostics — Anonymous app-usage statistics (which features are used, via Firebase Analytics) and crash reports (via Firebase Crashlytics). This data is used only to fix bugs and improve the App, and is not used for advertising.",
              "App Preferences — Theme settings, font choices, accent color, and onboarding state are stored locally on your device.",
            ]} />

            <SubHeading>Information We Do Not Collect</SubHeading>
            <BulletList items={[
              "We do not collect advertising identifiers",
              "We do not track you across other apps or websites",
              "We do not read your device's GPS location",
              "We do not sell your data to third parties",
            ]} />
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information collected solely to:</p>
            <BulletList items={[
              "Create and manage your account",
              "Sync your ministry data across your devices",
              "Display your preaching history and locations",
              "Restore your data if you switch devices or reinstall the App",
              "Improve App performance, understand which features are used, and fix bugs",
            ]} />
          </Section>

          <Section title="4. Data Storage & Security">
            <p>Your data is stored in two places:</p>
            <BulletList items={[
              "Locally on your device via SQLite — your primary data source, available offline",
              "Remotely via Google Firebase (Cloud Firestore and Firebase Storage) — encrypted cloud storage used to sync your data and photo attachments across devices",
            ]} />
            <p className="mt-3">
              We use industry-standard security measures including encrypted data transmission
              (HTTPS/TLS) and Firebase&apos;s built-in security rules to protect your information.
              However, no method of electronic storage or transmission is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>
              The App uses the following Google services, each governed by Google&apos;s privacy
              policy (firebase.google.com/support/privacy):
            </p>
            <BulletList items={[
              "Firebase Authentication — account sign-in and email verification",
              "Cloud Firestore & Firebase Storage — encrypted cloud sync of your ministry data and photo attachments",
              "Firebase Analytics & Crashlytics — anonymous usage statistics and crash reports, used only to improve stability and understand which features are used",
              "Google Places — suggests location names as you type when logging a service; only the text you type is sent",
            ]} />
            <p className="mt-3">
              We do not use any third-party advertising networks or data brokers, and we never sell your data.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              Your data is retained for as long as your account is active. If you delete your
              account, your data will be permanently removed from our servers within 30 days.
              Locally stored data on your device must be deleted manually by uninstalling the App.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <BulletList items={[
              "Access — Request a copy of the personal data we hold about you",
              "Correction — Update or correct your information within the App",
              "Deletion — Delete your account and all associated data directly in the App (Settings → Account → Delete Account), or by contacting us at the email below",
              "Portability — Request an export of your data (the App also includes a built-in backup export)",
            ]} />
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:thepreacherapp@gmail.com" style={{ color: "#F59E0B" }}>
                thepreacherapp@gmail.com
              </a>.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              The Preacher is not directed at children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you believe a child under
              13 has provided us with personal information, please contact us and we will delete
              it promptly.
            </p>
          </Section>

          <Section title="9. Email Verification">
            <p>
              When you create an account, we send a verification email to confirm your address.
              This email is sent through Firebase and is used solely for account security purposes.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by updating the &quot;Last Updated&quot; date at the top of this page
              and, where appropriate, through an in-app notification. Continued use of the App
              after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy,
              please contact us:
            </p>
            <div className="mt-4 p-5 rounded-2xl" style={{ background: "rgba(28,23,18,0.03)", border: "1px solid rgba(28,23,18,0.08)" }}>
              <p className="text-ink font-semibold">The Preacher</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:thepreacherapp@gmail.com" className="transition-colors" style={{ color: "#F59E0B" }}>
                  thepreacherapp@gmail.com
                </a>
              </p>
              <p className="mt-1">
                Website:{" "}
                <a href="https://thepreacherapp.com" className="transition-colors" style={{ color: "#F59E0B" }}>
                  thepreacherapp.com
                </a>
              </p>
            </div>
          </Section>

        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 text-center" style={{ borderTop: "1px solid rgba(28,23,18,0.06)" }}>
        <p className="text-ink/35 text-sm">© {new Date().getFullYear()} The Preacher. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="/" className="text-ink/40 hover:text-ink/60 text-sm transition-colors">Home</a>
          <a href="/terms" className="text-ink/40 hover:text-ink/60 text-sm transition-colors">Terms of Use</a>
          <a href="/support" className="text-ink/40 hover:text-ink/60 text-sm transition-colors">Support</a>
        </div>
      </footer>
    </main>
  );
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-ink mb-4">{title}</h2>
      {children}
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold mt-5 mb-2" style={{ color: "rgba(28,23,18,0.85)" }}>{children}</h3>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#F59E0B" }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
