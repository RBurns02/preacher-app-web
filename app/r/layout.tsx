import type { Metadata } from "next";

// This metadata is what iMessage, WhatsApp and Mail show when the sender pastes
// the link — for most recipients it is the first thing they ever see of the
// app, so it has to explain itself without the page being opened.
export const metadata: Metadata = {
  title: "You've been invited to The Preacher",
  description:
    "The Preacher keeps the record of your ministry: log every sermon, prepare and preach from your phone, and study the Bible deeper.",
  openGraph: {
    title: "You've been invited to The Preacher",
    description:
      "The Preacher keeps the record of your ministry: log every sermon, prepare and preach from your phone, and study the Bible deeper.",
    images: ["/og-image.png"],
    type: "website",
  },
  // Referral codes are personal to whoever shared them; keep them out of search.
  robots: { index: false, follow: false },
};

export default function ReferralInviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
