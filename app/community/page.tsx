import type { Metadata } from "next";
import { Divider, SitePage } from "../_home/site";
import { ChatDemo, FriendRequest, GroupPlan } from "../_home/together";
import { Check, Reveal } from "../_home/ui";

export const metadata: Metadata = {
  title: "Community — The Preacher",
  description: "Message other preachers, send a sermon, add friends, and read the Bible together in Study Groups.",
};

export default function CommunityPage() {
  return (
    <SitePage
      slug="community"
      title={<>Preachers, connected.</>}
      intro="Set up a profile, find other preachers by name or @username, and keep each other sharp. New in version 1.8."
      verse="Iron sharpeneth iron; so a man sharpeneth the countenance of his friend."
      reference="Proverbs 27:17"
    >
      <section className="pb-band">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="1" label="Messages" />
          <div className="pb-chapter-grid mt-12 !px-0">
            <Reveal>
              <h2 className="font-cardo text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05]">Send a sermon in the chat.</h2>
              <ul className="mt-8 grid gap-3 text-[17px] leading-relaxed">
                <Check>Message any preacher on The Preacher, one to one.</Check>
                <Check>Send a whole sermon. They open it and save it to their own library.</Check>
                <Check>A first message from someone new waits in Requests until you accept it.</Check>
              </ul>
            </Reveal>
            <Reveal delay={140}><ChatDemo /></Reveal>
          </div>
        </div>
      </section>

      <section className="pb-band is-alt">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="2" label="Friends" />
          <div className="pb-chapter-grid is-flipped mt-12 !px-0">
            <Reveal delay={140}><FriendRequest /></Reveal>
            <Reveal>
              <h2 className="font-cardo text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05]">Friends skip the line.</h2>
              <ul className="mt-8 grid gap-3 text-[17px] leading-relaxed">
                <Check>Tap Add Friend on a profile. Once they accept, their messages skip Requests.</Check>
                <Check>Switch on “Only friends can message me” whenever you want a quieter inbox.</Check>
                <Check>Report and block are on every message and profile.</Check>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-band">
        <div className="mx-auto max-w-6xl px-5">
          <Divider numeral="3" label="Study Groups" />
          <div className="pb-chapter-grid mt-12 !px-0">
            <Reveal>
              <h2 className="font-cardo text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05]">Read the Bible together, and see who’s keeping up.</h2>
              <ul className="mt-8 grid gap-3 text-[17px] leading-relaxed">
                <Check>A group chat for your staff, a Bible study, or a preachers’ fellowship.</Check>
                <Check>Share sermons and notes, and invite people with a link or from your friends.</Check>
                <Check>Pick a reading plan for the whole group and watch everyone’s progress.</Check>
              </ul>
              <p className="mt-6 text-sm text-pb-muted">Joining a group is free. Starting one is part of Premium.</p>
            </Reveal>
            <Reveal delay={140}><GroupPlan /></Reveal>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
