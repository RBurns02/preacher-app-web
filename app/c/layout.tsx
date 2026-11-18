import type { Metadata } from "next";

// A church's public page. The church name isn't known at build time (the site
// is a static export), so the share card says what kind of page it is.
export const metadata: Metadata = {
  title: "Sermons — The Preacher",
  description: "Sermons published by the pastor with The Preacher app.",
  openGraph: {
    title: "Sermons from our church",
    description: "Read the sermons our pastor has published.",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function ChurchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
