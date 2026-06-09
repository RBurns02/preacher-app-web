import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thepreacherapp.com"),
  title: "The Preacher — Log Sermons. Study Scripture. Grow.",
  description:
    "The app for ministers and congregations. Log every sermon you preach or hear, study scripture deeper, and grow in your faith.",
  openGraph: {
    title: "The Preacher",
    description: "Log every sermon. Study deeper. Grow together.",
    type: "website",
    url: "https://thepreacherapp.com",
    siteName: "The Preacher",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Preacher",
    description: "Log every sermon. Study deeper. Grow together.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
