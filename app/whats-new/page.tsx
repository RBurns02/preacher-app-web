import type { Metadata } from "next";
import { Divider, SitePage } from "../_home/site";
import { FeatureGuide, Illustrations, PulpitRemote, ReadingPlan, VoiceNote, Widget } from "../_home/tools";
import { Reveal } from "../_home/ui";

export const metadata: Metadata = {
  title: "What’s new — The Preacher",
  description: "New in 1.9: the Pulpit Bible look, voice notes, Pulpit Remote, illustrations, reading plans, a Home Screen widget and a features guide.",
};

export default function WhatsNewPage() {
  return (
    <SitePage
      slug="whats-new"
      title={<>Small things that save a lot of Sundays.</>}
      intro="New in version 1.9. Every tile on this page works: tap the mic, press Next, flip the card."
      verse="Behold, I will do a new thing; now it shall spring forth; shall ye not know it?"
      reference="Isaiah 43:19"
    >
      <section className="pb-band is-ink">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="1" label="For your study" dark />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Reveal><VoiceNote /></Reveal>
            <Reveal delay={80}><Illustrations /></Reveal>
            <Reveal delay={160}><ReadingPlan /></Reveal>
          </div>
        </div>
      </section>
      <section className="pb-band is-ink is-ink-alt">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="2" label="For Sunday, and every day" dark />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Reveal><PulpitRemote /></Reveal>
            <Reveal delay={80}><Widget /></Reveal>
            <Reveal delay={160}><FeatureGuide /></Reveal>
          </div>
        </div>
      </section>
      <section className="pb-band">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="3" label="Also in 1.9" />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[20px] border border-pb-hair-strong bg-pb-hair-strong md:grid-cols-3">
            {[
              ["The Pulpit Bible look", "Onionskin pages, red-letter scripture and thumb-index tabs on every sermon. Free, and the new default."],
              ["Free Study Groups", "Start a group for your staff or Bible study at no cost, and invite anyone by @username."],
              ["Switch accounts", "Move between your accounts in a tap, from Settings or Messages."],
              ["Roomier screens", "More space on every screen, so it reads easier in the pulpit."],
              ["Messages and Friends", "Message preachers, send sermons and add friends. See the Community page."],
            ].map(([t, d]) => (
              <li key={t} className="bg-pb-lift p-7">
                <h3 className="font-cardo text-[1.45rem] leading-tight">{t}</h3>
                <p className="mt-2 leading-relaxed text-pb-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SitePage>
  );
}
