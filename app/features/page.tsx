import type { Metadata } from "next";
import { LogDemo, PreachDemo } from "../_home/demos";
import { Divider, SitePage } from "../_home/site";
import { Check, PhoneFrame, Reveal } from "../_home/ui";

export const metadata: Metadata = {
  title: "Features — The Preacher",
  description: "Log a sermon in thirty seconds, then prepare it and preach it from your phone.",
};

const SCREENS = [
  ["home", "Home"],
  ["sermons", "Library"],
  ["sermon", "A sermon"],
  ["timeline", "Timeline"],
  ["prepare", "Prepare Mode"],
  ["preaching", "Preaching"],
  ["notes", "Notes"],
  ["voice", "Voice notes"],
  ["group", "Study Groups"],
];

export default function FeaturesPage() {
  return (
    <SitePage
      slug="features"
      title={<>The record of your ministry, and the pulpit in your pocket.</>}
      intro="Log every sermon and service in seconds. Build the outline, then preach it from the same page with a timer, large text and a screen that stays awake."
      verse="Write the vision, and make it plain upon tables, that he may run that readeth it."
      reference="Habakkuk 2:2"
    >
      {/* Log */}
      <section className="pb-band">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="1" label="Log a sermon" />
          <div className="pb-chapter-grid mt-12 !px-0">
            <Reveal>
              <h2 className="font-cardo text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05]">Thirty seconds, and it’s in the record.</h2>
              <ul className="mt-8 grid gap-3 text-[17px] leading-relaxed">
                <Check>A title, where and when. Scriptures, outline, notes and photos are there when you want them.</Check>
                <Check>One card per message, remembering every time and place you preached it.</Check>
                <Check>A timeline of your whole ministry, with a calendar, places and streaks.</Check>
                <Check>Batch Log for a revival or conference, and “I attended” for services you sat under.</Check>
              </ul>
            </Reveal>
            <Reveal delay={140}><LogDemo /></Reveal>
          </div>
        </div>
      </section>

      {/* Prepare & preach */}
      <section className="pb-band is-alt">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="2" label="Prepare and preach" />
          <div className="pb-chapter-grid is-flipped mt-12 !px-0">
            <Reveal delay={140}><PreachDemo /></Reveal>
            <Reveal>
              <h2 className="font-cardo text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05]">Prepare it. Then preach it, from the same page.</h2>
              <ul className="mt-8 grid gap-3 text-[17px] leading-relaxed">
                <Check>Build your outline point by point, with the verses filled in for you.</Check>
                <Check>Start the sermon: a timer, large text, auto-scroll, and a screen that stays awake.</Check>
                <Check>Tap the point you’re on and it lights up, so you never lose your place.</Check>
                <Check>Notes become sermons: tap “Make it a sermon” and it opens here, ready to preach.</Check>
              </ul>
              <p className="mt-6 text-sm text-pb-muted">Try it: press Start sermon, then tap a point.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Screens */}
      <section className="pb-band is-ink">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="3" label="See the screens" dark />
        </div>
        <div className="pb-marquee mt-10 !py-2">
          <div className="pb-marquee-track">
            {[...SCREENS, ...SCREENS].map(([f, label], i) => (
              <figure key={i} className="pb-marquee-item" aria-hidden={i >= SCREENS.length ? true : undefined}>
                <PhoneFrame src={`/screenshots/web/${f}.jpg`} alt={`The Preacher: ${label}`} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Everyone else */}
      <section className="pb-band">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="4" label="Beyond the pulpit" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="pb-card flex h-full gap-6 p-7">
                <div className="w-28 flex-none"><PhoneFrame src="/screenshots/web/timeline.jpg" alt="The Preacher timeline of services" /></div>
                <div>
                  <p className="text-sm font-semibold text-pb-muted">For the congregation</p>
                  <h3 className="mt-2 font-cardo text-[1.7rem] leading-tight">Sat under a good word? Keep it.</h3>
                  <p className="mt-3 leading-relaxed text-pb-muted">
                    Log the message you heard, the verses, and what you took away. The same notes and timeline, for every service you attend.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="pb-card flex h-full flex-col p-7">
                <p className="text-sm font-semibold text-pb-muted">On any computer</p>
                <h3 className="mt-2 font-cardo text-[1.7rem] leading-tight">Read and print your sermons at your desk.</h3>
                <p className="mt-3 leading-relaxed text-pb-muted">
                  Sign in on the web to read, search and print every sermon and service. Premium keeps them on every device you sign in to.
                </p>
                <a href="/app/" className="pb-cta-outline mt-6 w-fit">Sign in on the web</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="pb-card flex h-full flex-col p-7">
                <p className="text-sm font-semibold text-pb-muted">In any language</p>
                <h3 className="mt-2 font-cardo text-[1.7rem] leading-tight">Translate a sermon for an interpreter or a mission trip.</h3>
                <p className="mt-3 leading-relaxed text-pb-muted">
                  Spanish, Portuguese, French, Haitian Creole, Korean and 30+ more. Scripture references stay as written. Part of Premium.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="pb-card flex h-full flex-col p-7">
                <p className="text-sm font-semibold text-pb-muted">Share and print</p>
                <h3 className="mt-2 font-cardo text-[1.7rem] leading-tight">A PDF for the pulpit, or a link for a friend.</h3>
                <p className="mt-3 leading-relaxed text-pb-muted">
                  Print any sermon or service in a large pulpit layout or a classic page, or send it as a link that opens in another preacher’s app.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
