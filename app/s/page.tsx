"use client";

// The page behind /s/<code>.
//
// On an iPhone with the app installed, nobody sees this: iOS matches the link
// against apple-app-site-association and opens The Preacher straight to the
// sermon. This is what the OTHER people get — someone on Android, on a laptop,
// or on an iPhone without the app yet — and its only job is to explain what
// arrived and how to open it.
//
// Served for every code by a rewrite in vercel.json (/s/:code -> /s/), because
// the site is a static export and the codes are not known at build time.

import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/id6775250750";

export default function SharedSermonPage() {
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
          A sermon was shared with you
        </h1>

        <p
          className="mb-10"
          style={{ color: "rgba(28,23,18,0.62)", lineHeight: 1.75 }}
        >
          Someone sent you a sermon outline on The Preacher. Open this link on
          your iPhone with the app installed and it lands in your library —
          yours to edit, preach and keep.
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
            save the sermon.
          </p>
        )}

        <p style={{ color: "rgba(28,23,18,0.40)", fontSize: "13px" }}>
          Sermon links expire 30 days after they are sent.
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
