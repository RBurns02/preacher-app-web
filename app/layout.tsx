import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preacher Log — Track Your Ministry",
  description:
    "The app built for ministers. Log every sermon, study scripture deeper, and grow in your calling.",
  openGraph: {
    title: "Preacher Log",
    description: "Log every sermon. Study deeper. Preach better.",
    type: "website",
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
