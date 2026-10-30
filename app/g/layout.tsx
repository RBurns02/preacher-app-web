import type { Metadata } from "next";

// This metadata is what iMessage, WhatsApp and Mail show when the sender pastes
// the link — for most recipients it is the first thing they ever see of the
// app, so it has to explain itself without the page being opened.
export const metadata: Metadata = {
  title: "You're invited to a Study Group — The Preacher",
  description:
    "Join a Study Group on The Preacher to share sermons and notes together.",
  openGraph: {
    title: "You're invited to a Study Group",
    description:
      "Join a Study Group on The Preacher to share sermons and notes together.",
    images: ["/og-image.png"],
    type: "website",
  },
  // Invite codes are private to whoever holds them; keep them out of search.
  robots: { index: false, follow: false },
};

export default function GroupInviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
