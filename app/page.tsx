import { PAGES } from "./_home/pages";
import { Footer, Hero, Nav, ThumbIndex } from "./_home/shell";
import { Closing, Divider } from "./_home/site";
import { CountUp, PhoneFrame, Reveal } from "./_home/ui";

/* The front page: the cover, a few numbers, and the five books of the site.
   Each topic has its own page (app/features, bible, community, whats-new,
   pricing); the thumb index down the side moves between them. */

const SHOTS: Record<string, [string, string]> = {
  features: ["/screenshots/web/preaching.jpg", "Prepare Mode while preaching"],
  bible: ["/screenshots/web/bible.jpg", "The Bible with verses selected"],
  community: ["/screenshots/web/chat.jpg", "A conversation with a sermon sent in it"],
  "whats-new": ["/screenshots/web/remote.jpg", "Pulpit Remote"],
  pricing: ["/screenshots/web/sermons.jpg", "The sermon library"],
};

export default function Home() {
  return (
    <div className="pb-home">
      <a href="#main" className="pb-skip">Skip to content</a>
      <Nav />
      <ThumbIndex />
      <main id="main">
        <Hero />

        <section aria-label="At a glance" className="border-b-[3px] border-pb-ink bg-pb-lift">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-12 md:grid-cols-4">
            {[
              { n: 30, s: " sec", l: "to log a sermon" },
              { n: 30, s: "+", l: "languages to translate a sermon into" },
              { n: 4, s: "", l: "highlight colours in the Bible" },
              { n: 0, s: "", l: "ads, and no selling your data" },
            ].map((x) => (
              <div key={x.l} className="px-2 text-center">
                <dt className="sr-only">{x.l}</dt>
                <dd>
                  <span className="block font-cardo text-[clamp(2.4rem,5vw,3.4rem)] leading-none">
                    <CountUp to={x.n} suffix={x.s} />
                  </span>
                  <span className="mt-2 block text-sm text-pb-muted">{x.l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="explore" className="pb-band">
          <div className="mx-auto max-w-6xl px-5">
            <Divider label="Inside The Preacher" />
            <h2 id="explore" className="sr-only">Inside The Preacher</h2>
            <div className="mt-10 grid gap-5">
              {PAGES.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <a href={`/${p.slug}/`} className="pb-book group">
                    <span className="pb-book-num font-cardo" aria-hidden="true">{p.numeral}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-cardo text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight">{p.label}</span>
                      <span className="mt-2 block max-w-xl text-[17px] leading-relaxed text-pb-muted">{p.blurb}</span>
                      <span className="pb-book-go mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                        Open {p.label}
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </span>
                    </span>
                    <span className="pb-book-shot hidden w-36 flex-none sm:block" aria-hidden="true">
                      <PhoneFrame src={SHOTS[p.slug][0]} alt="" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Closing />
      </main>
      <Footer />
    </div>
  );
}
