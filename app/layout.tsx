import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thepreacherapp.com"),
  title: "The Preacher — Sermon Log & Study for Pastors",
  description:
    "The record of your ministry. Log every sermon, preach from your phone, and study with Strong's Concordance. Now on the App Store with a 3-day free trial.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "The Preacher",
    description: "The record of your ministry. Log every sermon, preach from your phone, and study deeper. Now on the App Store.",
    type: "website",
    url: "https://thepreacherapp.com",
    siteName: "The Preacher",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "The Preacher" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Preacher",
    description: "The record of your ministry. Log every sermon, preach from your phone, and study deeper. Now on the App Store.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
