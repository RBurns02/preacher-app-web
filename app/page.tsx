import { BibleDemo, LogDemo, PreachDemo } from "./_home/demos";
import { Faq, Pricing } from "./_home/pricing";
import { Footer, Hero, Nav, ThumbIndex } from "./_home/shell";
import { ChatDemo, FriendRequest, GroupPlan } from "./_home/together";
import { FeatureGuide, Illustrations, PulpitRemote, ReadingPlan, VoiceNote, Widget } from "./_home/tools";
import { AppStoreButton, ChapterHead, Check, CountUp, PhoneFrame, PlayComingSoon, Reveal } from "./_home/ui";

/* The Preacher's home page. Laid out like a pulpit Bible: an ink cover, then
   onionskin chapters with a thumb index down the side. Scripture is set in
   red letter; everything else is ink. Each chapter has a small working demo
   of the app instead of a description of it. */

const MARQUEE = [
  ["sermons", "Library"],
  ["service", "A service"],
  ["prepare", "Prepare Mode"],
  ["preaching", "Preaching"],
  ["preaching-outline", "Your outline, live"],
  ["bible", "Bible"],
  ["timeline", "Timeline"],
  ["notes", "Notes"],
  ["voice", "Voice notes"],
  ["chat", "Messages"],
  ["friends", "Friends"],
  ["group-plan", "Group reading"],
  ["illustrations", "Illustrations"],
  ["plans", "Reading plans"],
  ["remote", "Pulpit Remote"],
  ["translate", "Translate"],
  ["search", "Search"],
];

export default function Home() {
  return (
    <div className="pb-home">
      <a href="#main" className="pb-skip">Skip to content</a>
      <Nav />
      <ThumbIndex />
      <main id="main">
        <Hero />

        {/* Numbers strip */}
        <section aria-label="At a glance" className="border-b border-pb-hair bg-pb-lift">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-12 md:grid-cols-4">
            {[
              { n: 30, s: " sec", l: "to log a sermon" },
              { n: 2, s: "", l: "Bibles built in, offline (KJV and ASV)" },
              { n: 30, s: "+", l: "languages to translate a sermon into" },
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

        {/* I. Log */}
        <section id="log" className="pb-chapter">
          <div className="pb-chapter-grid">
            <div>
              <ChapterHead
                numeral="I"
                kicker="The record"
                title={<>Log a sermon in thirty seconds.</>}
                verse="Write the vision, and make it plain upon tables, that he may run that readeth it."
                reference="Habakkuk 2:2"
              />
              <Reveal delay={120}>
                <ul className="mt-8 grid gap-3 text-[17px] leading-relaxed">
                  <Check>A title, where and when. Scriptures, outline, notes and photos are there when you want them.</Check>
                  <Check>One card per message, remembering every time and place you preached it.</Check>
                  <Check>A timeline of your whole ministry, with a calendar, places and streaks.</Check>
                  <Check>Batch Log for a revival or conference, and “I attended” for services you sat under.</Check>
                </ul>
              </Reveal>
            </div>
            <Reveal delay={160}><LogDemo /></Reveal>
          </div>
        </section>

        {/* II. Prepare & preach */}
        <section id="preach" className="pb-chapter is-tinted">
          <div className="pb-chapter-grid is-flipped">
            <Reveal delay={160}><PreachDemo /></Reveal>
            <div>
              <ChapterHead
                numeral="II"
                kicker="Prepare Mode"
                title={<>Prepare it. Then preach it, from the same page.</>}
                verse="Preach the word; be instant in season, out of season."
                reference="2 Timothy 4:2"
              />
              <Reveal delay={120}>
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

        {/* III. Bible */}
        <section id="bible" className="pb-chapter">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
              <ChapterHead numeral="III" kicker="A study Bible, built in" title={<>The words behind the words.</>} />
              <Reveal delay={100}>
                <p className="text-[17px] leading-relaxed text-pb-muted">
                  The KJV and ASV, offline. Highlight in four colours, keep notes on any verse, and follow a reading plan.
                  Tap a word in the KJV to see the Hebrew or Greek behind it, then save it to your Word Study Notebook.
                </p>
              </Reveal>
            </div>
            <Reveal delay={160} className="mt-10"><BibleDemo /></Reveal>
          </div>
        </section>

        {/* Real screens, drifting by */}
        <section aria-label="Screens from the app" className="pb-marquee">
          <div className="pb-marquee-track">
            {[...MARQUEE, ...MARQUEE].map(([f, label], i) => (
              <figure key={i} className="pb-marquee-item" aria-hidden={i >= MARQUEE.length ? true : undefined}>
                <PhoneFrame src={`/screenshots/web/${f}.jpg`} alt={`The Preacher: ${label}`} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* IV. Together */}
        <section id="together" className="pb-chapter">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <span className="pb-new">New in 1.8</span>
              <ChapterHead
                numeral="IV"
                kicker="Messages, friends and Study Groups"
                title={<>Preachers, connected.</>}
                verse="Iron sharpeneth iron; so a man sharpeneth the countenance of his friend."
                reference="Proverbs 27:17"
              />
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
              <Reveal><ChatDemo /></Reveal>
              <div className="grid gap-5">
                <Reveal delay={120}><FriendRequest /></Reveal>
                <Reveal delay={220}><GroupPlan /></Reveal>
              </div>
            </div>
            <Reveal delay={100}>
              <p className="mt-6 text-sm text-pb-muted">
                Report and block are on every message and profile. Joining a Study Group is free; starting one is part of Premium.
              </p>
            </Reveal>
          </div>
        </section>

        {/* V. New tools */}
        <section id="new" className="pb-chapter is-ink">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <span className="pb-new is-dark">New in 1.8</span>
              <ChapterHead dark numeral="V" kicker="New tools" title={<>Small things that save a lot of Sundays.</>} />
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <Reveal><VoiceNote /></Reveal>
              <Reveal delay={80}><PulpitRemote /></Reveal>
              <Reveal delay={160}><Illustrations /></Reveal>
              <Reveal><ReadingPlan /></Reveal>
              <Reveal delay={80}><Widget /></Reveal>
              <Reveal delay={160}><FeatureGuide /></Reveal>
            </div>
            <Reveal>
              <p className="mt-8 text-sm text-pb-night-muted">Every tile above works. Tap the mic, press Next, flip the card.</p>
            </Reveal>
          </div>
        </section>

        {/* Listeners + the web */}
        <section className="pb-chapter is-tinted">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
            <Reveal>
              <div className="pb-card flex h-full gap-6 p-7">
                <div className="w-28 flex-none"><PhoneFrame src="/screenshots/web/service.jpg" alt="A logged service in The Preacher" /></div>
                <div>
                  <p className="text-sm font-semibold text-pb-muted">For the congregation</p>
                  <h3 className="mt-2 font-cardo text-[1.7rem] leading-tight">Sat under a good word? Keep it.</h3>
                  <p className="mt-3 leading-relaxed text-pb-muted">
                    Log the message you heard, the verses, and what you took away. The same Bible, notes and timeline, for every
                    service you attend.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="pb-card flex h-full flex-col p-7">
                <p className="text-sm font-semibold text-pb-muted">On any computer</p>
                <h3 className="mt-2 font-cardo text-[1.7rem] leading-tight">Read and print your sermons at your desk.</h3>
                <p className="mt-3 leading-relaxed text-pb-muted">
                  Sign in on the web to read, search and print every sermon and service. Premium keeps them on every device you
                  sign in to.
                </p>
                <a href="/app/" className="pb-cta-outline mt-6 w-fit">Sign in on the web</a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VI. Pricing */}
        <section id="pricing" className="pb-chapter">
          <div className="mx-auto max-w-4xl px-5">
            <div className="flex flex-col items-center text-center">
              <ChapterHead numeral="VI" kicker="Pricing" title={<>Free to start. Premium when you need it.</>} />
            </div>
            <Reveal delay={120} className="mt-10"><Pricing /></Reveal>
          </div>
        </section>

        {/* Questions */}
        <section aria-labelledby="faq-title" className="pb-chapter is-tinted">
          <div className="mx-auto max-w-3xl px-5">
            <h2 id="faq-title" className="font-cardo text-[clamp(2rem,4vw,2.8rem)]">Questions</h2>
            <div className="mt-8"><Faq /></div>
            <p className="mt-6 text-sm text-pb-muted">
              Something else? <a href="/support/" className="underline underline-offset-4">Get support</a>.
            </p>
          </div>
        </section>

        {/* Closing */}
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
      </main>
      <Footer />
    </div>
  );
}
