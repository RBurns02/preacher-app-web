import type { Metadata } from "next";
import { BibleDemo } from "../_home/demos";
import { Divider, SitePage } from "../_home/site";
import { Reveal } from "../_home/ui";

export const metadata: Metadata = {
  title: "Bible — The Preacher",
  description: "A study Bible built in: highlights, verse notes, Strong’s Concordance and reading plans.",
};

const MORE = [
  ["Highlights and verse notes", "Mark verses in four colours and keep a note on any verse. Free, and yours forever."],
  ["Strong’s Concordance", "The original Hebrew or Greek behind every word, with definitions and cross references. Part of Premium."],
  ["Word Study Notebook", "Save the words you study, with your own notes, and come back to them from the Bible’s top bar."],
  ["Reading plans", "The Bible in a Year, the New Testament in 90 days, the Gospels in 30, and Psalms & Proverbs in a month."],
  ["Add to a sermon", "Select a verse and add it straight to a sermon outline, with the text filled in."],
  ["Works offline", "The whole Bible lives on your phone, so it opens in a church basement with no signal."],
];

export default function BiblePage() {
  return (
    <SitePage
      slug="bible"
      title={<>The words behind the words.</>}
      intro="A study Bible built into the app you preach from. Read, highlight, keep notes, follow a plan, and tap a word to see the Hebrew or Greek behind it."
      verse="Thy word is a lamp unto my feet, and a light unto my path."
      reference="Psalm 119:105"
    >
      <section className="pb-band">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="1" label="Try it: Psalm 23" />
          <Reveal className="mt-12"><BibleDemo /></Reveal>
        </div>
      </section>

      <section className="pb-band is-alt">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="2" label="Also in the Bible" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[20px] border border-pb-hair-strong bg-pb-hair-strong md:grid-cols-2 lg:grid-cols-3">
            {MORE.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 80} className="h-full">
                <div className="h-full bg-pb-lift p-7">
                  <h3 className="font-cardo text-[1.5rem] leading-tight">{t}</h3>
                  <p className="mt-3 leading-relaxed text-pb-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
