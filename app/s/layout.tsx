import type { Metadata } from "next";

// This metadata is what iMessage, WhatsApp and Mail show when the sender pastes
// the link — for most recipients it is the first thing they ever see of the
// app, so it has to explain itself without the page being opened.
export const metadata: Metadata = {
  title: "A sermon was shared with you — The Preacher",
  description:
    "Someone sent you a sermon outline on The Preacher. Open it in the app.",
  openGraph: {
    title: "A sermon was shared with you",
    description:
      "Someone sent you a sermon outline on The Preacher. Open it in the app.",
    images: ["/og-image.png"],
    type: "website",
  },
  // A share link is single-use and private to whoever holds it; there is
  // nothing here worth indexing, and the codes should not end up in search.
  robots: { index: false, follow: false },
};

export default function SharedSermonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
