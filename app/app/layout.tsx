import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Preacher for Web",
  description:
    "Read, search and print your sermons and services from any computer.",
  // A private, signed-in reader — nothing here belongs in search results.
  robots: { index: false, follow: false },
};

export default function WebAppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
