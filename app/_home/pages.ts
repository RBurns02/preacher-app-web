/* The site is laid out like a Bible you thumb through: each page is a book,
   and the index down the right edge shows which one you're in. */
export const PAGES = [
  { slug: "features", numeral: "I", label: "Features", blurb: "Log a sermon in thirty seconds, then prepare it and preach it from the same page." },
  { slug: "bible", numeral: "II", label: "Bible", blurb: "A study Bible built in: verse notes, Strong’s and reading plans." },
  { slug: "community", numeral: "III", label: "Community", blurb: "Message other preachers, send a sermon, add friends and read together in Study Groups." },
  { slug: "whats-new", numeral: "IV", label: "What’s new", blurb: "The Pulpit Bible look, voice notes, Pulpit Remote, illustrations, reading plans and a widget." },
  { slug: "pricing", numeral: "V", label: "Pricing", blurb: "Free to start. What Premium adds, and answers to common questions." },
] as const;
export type PageSlug = (typeof PAGES)[number]["slug"];

