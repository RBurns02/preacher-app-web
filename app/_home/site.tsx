import type { ReactNode } from "react";
import { PAGES, type PageSlug } from "./pages";
import { Footer, Nav, ThumbIndex } from "./shell";
import { AppStoreButton, PlayComingSoon, Reveal } from "./ui";

/* Shared frame for every page of the site: nav, thumb index, a page header,
   the content, a "turn the page" link to the next book, and the closing call. */

export function SitePage({ slug, title, intro, verse, reference, children }: {
  slug: PageSlug;
  title: ReactNode;
  intro: string;
  verse?: string;
  reference?: string;
  children: ReactNode;
}) {
  const i = PAGES.findIndex((p) => p.slug === slug);
  const page = PAGES[i];
  const next = PAGES[(i + 1) % PAGES.length];
  return (
    <div className="pb-home">
      <a href="#main" className="pb-skip">Skip to content</a>
      <Nav />
      <ThumbIndex current={slug} />
      <main id="main">
        <header className="pb-page-head">
          <div className="pb-hero-rules" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:pb-20 md:pt-40">
            <p className="pb-rise flex items-baseline gap-3 text-sm font-semibold text-pb-night-muted">
              <span className="font-cardo text-lg">{page.numeral}</span>
              <span>{page.label}</span>
            </p>
            <h1 className="pb-rise mt-4 max-w-3xl font-cardo text-[clamp(2.6rem,6.5vw,4.8rem)] leading-[1.02] text-pb-onion" style={{ animationDelay: "100ms", textWrap: "balance" }}>
              {title}
            </h1>
            <p className="pb-rise mt-5 max-w-2xl text-lg leading-relaxed text-pb-night-muted" style={{ animationDelay: "200ms" }}>{intro}</p>
            {verse && (
              <p className="pb-rise mt-8 max-w-xl font-cardo text-xl leading-snug text-pb-red-night" style={{ animationDelay: "300ms" }}>
                {verse}
                {reference && <span className="ml-2 whitespace-nowrap text-sm opacity-75">{reference}</span>}
              </p>
            )}
          </div>
        </header>
        {children}
        <TurnThePage numeral={next.numeral} label={next.label} blurb={next.blurb} href={`/${next.slug}/`} />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

/** A clear break between two kinds of information: a heavy rule with the
 *  next section's name set into it. */
export function Divider({ numeral, label, dark = false }: { numeral?: string; label: string; dark?: boolean }) {
  return (
    <div className={`pb-divider ${dark ? "is-dark" : ""}`} role="separator" aria-label={label}>
      <span className="pb-divider-rule" aria-hidden="true" />
      <span className="pb-divider-label">
        {numeral && <span className="font-cardo text-base">{numeral}</span>}
        {label}
      </span>
      <span className="pb-divider-rule" aria-hidden="true" />
    </div>
  );
}

/** The last thing on each page: the next page, like turning to the next book. */
function TurnThePage({ numeral, label, blurb, href }: { numeral: string; label: string; blurb: string; href: string }) {
  return (
    <section aria-label="Next page" className="border-t-[3px] border-pb-ink bg-pb-lift">
      <a href={href} className="pb-turn group mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-12">
        <span>
          <span className="block text-sm font-semibold text-pb-muted">Next · <span className="font-cardo">{numeral}</span></span>
          <span className="mt-1 block font-cardo text-[clamp(2rem,4.5vw,3rem)] leading-tight">{label}</span>
          <span className="mt-2 block max-w-xl text-pb-muted">{blurb}</span>
        </span>
        <span className="pb-turn-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
      </a>
    </section>
  );
}

export function Closing() {
  return (
    <section className="pb-closing">
      <div className="pb-hero-rules" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
        <Reveal>
          <h2 className="font-cardo text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.02] text-pb-onion">
            Start your record <span className="pb-gilt-text">this Sunday.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-pb-night-muted">Free to download. Your first three sermons are on us.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <AppStoreButton dark />
            <PlayComingSoon dark />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
