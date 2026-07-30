import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thepreacherapp.com"),
  title: "The Preacher — Log Sermons. Study Scripture. Grow.",
  description:
    "The app for ministers and congregations. Log every sermon you preach or hear, study scripture deeper, and grow in your faith.",
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
    description: "Log every sermon. Study deeper. Grow together.",
    type: "website",
    url: "https://thepreacherapp.com",
    siteName: "The Preacher",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "The Preacher" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Preacher",
    description: "Log every sermon. Study deeper. Grow together.",
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
      </body>
    </html>
  );
}
