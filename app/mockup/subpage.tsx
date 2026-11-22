"use client";

import { useState, type FormEvent } from "react";
import type { MockupPageData } from "./page-data";
import { MOCKUP_PAGES } from "./page-data";
import { MockupFooter, MockupNav } from "./site-shell";

const APP_STORE_URL = "https://apps.apple.com/us/app/the-preacher/id6775250750";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

function PageHero({ page }: { page: MockupPageData }) {
  return (
    <header className="mp-page-hero">
      <div className="mp-page-hero-rules" aria-hidden="true" />
      <div className="mp-page-hero-inner">
        <div className="mp-page-hero-copy">
          <p className="mp-kicker mp-kicker-light">{page.label}</p>
          <h1>{page.title}</h1>
          <p className="mp-page-intro">{page.intro}</p>
          {page.verse && <blockquote>“{page.verse}” <cite>{page.reference}</cite></blockquote>}
        </div>
        {page.image && (
          <figure className="mp-page-hero-device">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={page.image} alt={page.imageAlt || ""} width="660" height="1434" />
            <figcaption>Inside The Preacher · {page.label}</figcaption>
          </figure>
        )}
      </div>
    </header>
  );
}

function StandardPage({ page }: { page: MockupPageData }) {
  return (
    <>
      {page.slug === "bible" && <BibleStudyDemo />}
      {page.slug === "community" && <MessageDemo />}
      <div className="mp-story-sections">
        {page.sections?.map((section, index) => (
          <section className={`mp-story ${index % 2 ? "is-reversed" : ""} ${section.image ? "" : "is-copy-only"}`} key={section.title}>
            <div className="mp-story-copy">
              <p className="mp-kicker">{section.eyebrow.split(" · ")[1] || section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.bullets && (
                <ul>{section.bullets.map((bullet) => <li key={bullet}><CheckIcon />{bullet}</li>)}</ul>
              )}
            </div>
            {section.image && (
              <div className="mp-story-visual has-image">
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={section.image} alt={section.imageAlt || ""} width="660" height="1434" />
                </figure>
              </div>
            )}
          </section>
        ))}
      </div>
    </>
  );
}

function BibleStudyDemo() {
  const [word, setWord] = useState<"shepherd" | "want">("shepherd");
  const detail = word === "shepherd"
    ? { original: "רָעָה · râʻâh", meaning: "To tend a flock; to pasture, rule or care for." }
    : { original: "חָסֵר · châçêr", meaning: "To lack, decrease or be without what is needed." };
  return (
    <section className="mp-live-demo" aria-labelledby="bible-demo-title">
      <div className="mp-live-demo-copy">
        <p className="mp-kicker"><span>Try it</span>Psalm 23:1</p>
        <h2 id="bible-demo-title">Open the study without leaving the verse.</h2>
        <p>Select an underlined word. The preview changes immediately and remains readable without its motion.</p>
      </div>
      <div className="mp-bible-demo">
        <p className="mp-bible-verse"><sup>1</sup> The LORD is my <button type="button" className={word === "shepherd" ? "is-selected" : ""} onClick={() => setWord("shepherd")}>shepherd</button>; I shall not <button type="button" className={word === "want" ? "is-selected" : ""} onClick={() => setWord("want")}>want</button>.</p>
        <div className="mp-word-card" aria-live="polite">
          <span>Strong’s word study</span>
          <strong>{detail.original}</strong>
          <p>{detail.meaning}</p>
          <button type="button">Add to Word Study Notebook <ArrowIcon /></button>
        </div>
      </div>
    </section>
  );
}

function MessageDemo() {
  return (
    <section className="mp-live-demo mp-message-demo" aria-labelledby="message-demo-title">
      <div className="mp-live-demo-copy">
        <p className="mp-kicker"><span>Try it</span>A sermon in context</p>
        <h2 id="message-demo-title">The message stays readable inside the message.</h2>
        <p>Conversation groups naturally, delivery is stated once, and the shared sermon has a clear open action.</p>
      </div>
      <div className="mp-chat-window" aria-label="Example conversation">
        <div className="mp-chat-head"><span className="mp-avatar">JM</span><div><strong>James Moore</strong><small>Pastor · Grace Chapel</small></div></div>
        <p className="mp-bubble">That point about finishing the assignment stayed with me.</p>
        <div className="mp-shared-sermon"><span>Shared sermon</span><strong>Finish the Work</strong><small>2 Timothy 4:1–5 · 3 sections</small><a href="/mockup/sermon-invite/">Open sermon <ArrowIcon /></a></div>
        <p className="mp-bubble is-mine">I’m glad. Use anything that helps Sunday.</p>
        <span className="mp-read-state">Read 8:42 PM</span>
      </div>
    </section>
  );
}

const FAQS = [
  ["What stays free?", "The Pulpit Bible look, sermon logging for the first three sermons, core Bible reading, preaching tools and joining or starting Study Groups."],
  ["What does Premium add?", "Unlimited sermons, Strong’s word study, translation, analytics and map history, Batch Log, Sharp and Paper looks, and multi-device sync."],
  ["When will I be charged?", "After the 7-day trial, the selected subscription renews at $4.99 monthly or $44.99 yearly unless canceled in App Store settings before the trial ends."],
  ["Can I cancel in the app?", "Subscriptions are managed by Apple. Open App Store subscription settings to cancel; your Premium access continues through the paid period."],
  ["Does the app work offline?", "Bible reading, sermon preparation and pulpit reading are designed to remain available without a signal. Sync-dependent features reconcile when a connection returns."],
];

function Accordion({ items = FAQS }: { items?: string[][] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mp-accordion">
      {items.map(([question, answer], index) => {
        const expanded = open === index;
        return (
          <div className={expanded ? "is-open" : ""} key={question}>
            <h3><button type="button" aria-expanded={expanded} aria-controls={`mp-answer-${index}`} onClick={() => setOpen(expanded ? -1 : index)}><span>{question}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg></button></h3>
            <div className="mp-accordion-panel" id={`mp-answer-${index}`}><div><p>{answer}</p></div></div>
          </div>
        );
      })}
    </div>
  );
}

function PricingPage() {
  return (
    <section className="mp-pricing-page">
      <div className="mp-plan-grid">
        <article className="mp-plan-card">
          <span className="mp-overline">Free</span><div className="mp-plan-price"><strong>$0</strong></div><p>Start the record and use the pulpit essentials.</p>
          <ul><li><CheckIcon /> First three sermons</li><li><CheckIcon /> Bible reading</li><li><CheckIcon /> Prepare and preach</li><li><CheckIcon /> Study Groups</li></ul>
          <a href={APP_STORE_URL} className="mp-button mp-plan-button">Download free <ArrowIcon /></a>
        </article>
        <article className="mp-plan-card is-featured">
          <span className="mp-overline">Premium · 7 days free</span><div className="mp-plan-price"><strong>$4.99</strong><span>/ month</span></div><p>Or $44.99 yearly. Built for a growing ministry record.</p>
          <ul><li><CheckIcon /> Unlimited sermons</li><li><CheckIcon /> Strong’s word study</li><li><CheckIcon /> Translation, analytics and map</li><li><CheckIcon /> Multi-device sync</li></ul>
          <a href={APP_STORE_URL} className="mp-button mp-plan-button">Start on the App Store <ArrowIcon /></a>
          <small>Renews unless canceled in App Store settings before the trial ends.</small>
        </article>
      </div>
      <div className="mp-faq-wrap"><p className="mp-kicker">Trial and billing questions</p><h2>Know the terms before the trial starts.</h2><Accordion /></div>
    </section>
  );
}

const SUPPORT_FAQS = [
  ["How do I restore my sermons?", "Sign in with the same verified email. Local data remains on the original device; synced Premium data returns after authentication and connection."],
  ["Why can’t I find a sermon?", "Search the full title, Scripture, series or location. Clear active filters if the result is older or belongs to an attended service."],
  ["How do I cancel Premium?", "Open App Store settings, choose Subscriptions, select The Preacher and follow Apple’s cancellation steps."],
  ["How do I delete my account?", "In the app, open Settings → Account → Delete Account. The flow explains what is removed before final confirmation."],
];

function SupportPage() {
  return (
    <section className="mp-support-page">
      <div className="mp-support-search"><label htmlFor="mock-support-search">Search help</label><div><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></svg><input id="mock-support-search" type="search" placeholder="Try “restore sermons”" /></div><small>Preview field — no search request is sent.</small></div>
      <div className="mp-support-grid"><div><p className="mp-kicker">Common questions</p><h2>Start with the shortest useful answer.</h2></div><Accordion items={SUPPORT_FAQS} /></div>
      <div className="mp-contact-card"><div><p className="mp-kicker">Contact</p><h2>Still stuck? Write to a person.</h2><p>Include the screen you were on and what you expected to happen. Never email a password or verification code.</p></div><a className="mp-button mp-button-primary" href="mailto:thepreacherapp@gmail.com">Email support <ArrowIcon /></a></div>
    </section>
  );
}

function LegalPage({ page }: { page: MockupPageData }) {
  return (
    <section className="mp-legal-page">
      <aside><span>On this page</span>{page.sections?.map((section, index) => <a key={section.title} href={`#legal-section-${index + 1}`}>{section.title}</a>)}<p>Concept layout. Approved legal copy remains authoritative.</p></aside>
      <article><header><span>Effective November 1, 2026</span><p>This mockup demonstrates the reading structure. It does not replace the current approved legal document.</p></header>{page.sections?.map((section, index) => <section id={`legal-section-${index + 1}`} key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}</article>
    </section>
  );
}

function SignInPage() {
  const [message, setMessage] = useState("Preview only — credentials are not collected or transmitted.");
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setMessage("Preview submitted locally. No sign-in request was sent."); }
  return (
    <section className="mp-auth-page">
      <div className="mp-auth-aside"><p className="mp-kicker mp-kicker-light"><span>Secure access</span>Your record</p><h2>Pick up where the sermon left off.</h2><blockquote>“I have fought a good fight, I have finished my course, I have kept the faith.” <cite>2 Timothy 4:7</cite></blockquote></div>
      <form className="mp-auth-card" onSubmit={submit}><span className="mp-overline">Sign in</span><h2>Welcome back.</h2><label htmlFor="mock-email">Email address</label><input id="mock-email" type="email" autoComplete="email" placeholder="pastor@example.com" /><label htmlFor="mock-password">Password</label><input id="mock-password" type="password" autoComplete="current-password" /><a href="/mockup/support/">Forgot password?</a><button className="mp-button" type="submit">Preview sign in <ArrowIcon /></button><p role="status">{message}</p><hr /><span>New to The Preacher? <a href={APP_STORE_URL}>Get the app</a></span></form>
    </section>
  );
}

function InvitePage({ group = false }: { group?: boolean }) {
  return (
    <section className="mp-invite-page">
      <article className="mp-invite-card">
        <span className="mp-overline">{group ? "Study Group invitation" : "Shared sermon"}</span>
        <div className="mp-avatar mp-invite-avatar">{group ? "GC" : "JM"}</div>
        <p>{group ? "Grace Chapel invited you to join" : "James Moore shared a sermon with you"}</p>
        <h2>{group ? "Read Through Romans" : "Finish the Work"}</h2>
        <p className="mp-invite-meta">{group ? "12 members · Romans 1–16 · Group posts visible to members" : "2 Timothy 4:1–5 · Sunday evening · 3 outline sections"}</p>
        {!group && <div className="mp-sermon-preview"><span>01</span><strong>The unfinished letter</strong><span>02</span><strong>Faithfulness outlasts applause</strong><span>03</span><strong>Finish the assignment</strong></div>}
        {group && <div className="mp-group-visibility"><strong>Before you join</strong><p>Your profile name and group posts will be visible to members. You can leave the group later.</p></div>}
        <a className="mp-button" href={APP_STORE_URL}>{group ? "Open invitation in the app" : "Read in The Preacher"}<ArrowIcon /></a>
        <small>This web preview does not join a group or create an account.</small>
      </article>
    </section>
  );
}

function NextPage({ current }: { current: string }) {
  const index = MOCKUP_PAGES.findIndex((page) => page.slug === current);
  const next = MOCKUP_PAGES[(index + 1) % MOCKUP_PAGES.length];
  return <a className="mp-next-page" href={`/mockup/${next.slug}/`}><span><small>Next page</small><strong>{next.label}</strong></span><ArrowIcon /></a>;
}

export function MockupSubpage({ page }: { page: MockupPageData }) {
  return (
    <div className="mp-site mp-subpage-site">
      <a className="mp-skip" href="#main">Skip to content</a>
      <MockupNav current={page.slug} />
      <main id="main">
        <PageHero page={page} />
        {page.kind === "pricing" ? <PricingPage /> : page.kind === "support" ? <SupportPage /> : page.kind === "legal" ? <LegalPage page={page} /> : page.kind === "signin" ? <SignInPage /> : page.kind === "sermon-invite" ? <InvitePage /> : page.kind === "group-invite" ? <InvitePage group /> : <StandardPage page={page} />}
        <NextPage current={page.slug} />
      </main>
      <MockupFooter />
    </div>
  );
}

