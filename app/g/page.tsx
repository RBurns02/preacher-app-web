"use client";

// The page behind /g/<code> — a Study Group invite.
//
// On an iPhone with the app installed, nobody sees this: iOS matches the link
// against apple-app-site-association and opens The Preacher straight to the
// group's join screen. This is what the OTHER people get — someone on Android, on a laptop,
// or on an iPhone without the app yet — and its only job is to explain what
// arrived and how to open it.
//
// Served for every code by a rewrite in vercel.json (/g/:code -> /g/), because
// the site is a static export and the codes are not known at build time.

import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/id6775250750";

export default function GroupInvitePage() {
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsApple(/iPhone|iPad|iPod|Macintosh/.test(ua));
  }, []);

  return (
    <main
      style={{
        background: "#FAF8F3",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div className="w-full max-w-md text-center">
        <div
          className="w-20 h-20 rounded-2xl mx-auto mb-8"
          style={{
            backgroundImage: "url('/icon.png')",
            backgroundSize: "580%",
            backgroundPosition: "49% 49%",
            backgroundRepeat: "no-repeat",
          }}
        />

        <h1 className="text-3xl font-black text-ink mb-4 tracking-tight">
          You're invited to a Study Group
        </h1>

        <p
          className="mb-10"
          style={{ color: "rgba(28,23,18,0.62)", lineHeight: 1.75 }}
        >
          Someone invited you to a Study Group on The Preacher, a place to
          talk, pray and share sermons and notes together. Open this link on
          your iPhone with the app installed to join. Joining is free.
        </p>

        <a
          href={APP_STORE_URL}
          className="block w-full rounded-2xl font-bold text-white py-4 mb-4 transition-opacity hover:opacity-90"
          style={{ background: "#1C1712", fontSize: "17px" }}
        >
          Get The Preacher — free
        </a>

        {/* The one instruction that actually matters, and the one people get
            wrong: after installing, the link has to be tapped a second time.
            iOS cannot hand the app a link it was never given. */}
        {isApple && (
          <p
            className="mb-8"
            style={{ color: "rgba(28,23,18,0.55)", fontSize: "14px", lineHeight: 1.7 }}
          >
            Already installed it? Come back and{" "}
            <strong className="text-ink">tap this link again</strong> — it will
            open in the app.
          </p>
        )}

        {!isApple && (
          <p
            className="mb-8"
            style={{ color: "rgba(28,23,18,0.55)", fontSize: "14px", lineHeight: 1.7 }}
          >
            The Preacher is on iPhone and iPad. Open this link on your iPhone to
            join the group.
          </p>
        )}

        <p style={{ color: "rgba(28,23,18,0.40)", fontSize: "13px" }}>
          If the link doesn't work, ask for a new one. Group admins can
          reset it.
        </p>

        <a
          href="/"
          className="inline-block mt-10 text-sm font-medium transition-colors"
          style={{ color: "rgba(28,23,18,0.55)" }}
        >
          ← What is The Preacher?
        </a>
      </div>
    </main>
  );
}
