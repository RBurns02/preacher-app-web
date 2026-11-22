"use client";

import { useState } from "react";
import { MockupFooter, MockupNav } from "./site-shell";

const APP_STORE_URL = "https://apps.apple.com/us/app/the-preacher/id6775250750";
const VERSE = "Preach the word; be instant in season, out of season.";

type SectionId = "opening" | "truth" | "response";

const sections: Array<{ id: SectionId; label: string; detail: string }> = [
  {
    id: "opening",
    label: "Opening — the unfinished letter",
    detail: "Begin with the letter found in Granddad’s Bible, then name the ache of work left undone.",
  },
  {
    id: "truth",
    label: "Truth — faithfulness outlasts applause",
    detail: "Read 2 Timothy 4:1–5. Hold on verse 2 and connect preparation to presence.",
  },
  {
    id: "response",
    label: "Response — finish the assignment",
    detail: "Invite one quiet commitment: write the name, make the call, return to the work.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CopyIcon({ copied }: { copied: boolean }) {
  return (
    <span className={`mp-copy-icon ${copied ? "is-copied" : ""}`} aria-hidden="true">
      <svg className="mp-copy-glyph" viewBox="0 0 24 24">
        <rect x="8" y="8" width="10" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2" />
      </svg>
      <svg className="mp-check-glyph" viewBox="0 0 24 24">
        <path d="m5 12 4 4L19 6" />
      </svg>
    </span>
  );
}

export function MotionMockup() {
  const [openSection, setOpenSection] = useState<SectionId>("truth");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const [previewComplete, setPreviewComplete] = useState(false);

  async function copyVerse() {
    try {
      await navigator.clipboard.writeText(`${VERSE} — 2 Timothy 4:2`);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2200);
    } catch {
      setCopyState("error");
    }
  }

  return (
    <div className="mp-site">
      <a className="mp-skip" href="#main">Skip to content</a>
      <MockupNav />

      <main id="main">
        <section className="mp-hero" aria-labelledby="mockup-title">
          <div className="mp-hero-copy">
            <p className="mp-kicker"><span>01</span> Prepare with a clear mind</p>
            <h1 id="mockup-title">From Monday notes to <em>Sunday pulpit.</em></h1>
            <p className="mp-lede">
              One focused place to shape the message, carry Scripture into the pulpit,
              and leave a faithful record when the service is done.
            </p>
            <div className="mp-hero-actions">
              <a className="mp-button mp-button-primary" href="#workflow">
                Try the sermon flow <ArrowIcon />
              </a>
              <a className="mp-text-link" href={APP_STORE_URL}>View on the App Store</a>
            </div>
            <p className="mp-trial-note">
              7 days free, then $4.99/month or $44.99/year. Cancel in App Store settings before the trial ends.
            </p>
          </div>

          <div className="mp-workspace-wrap" aria-label="Interactive sermon preparation preview">
            <div className="mp-workspace-glow" aria-hidden="true" />
            <article className="mp-workspace">
              <header className="mp-workspace-head">
                <div>
                  <span className="mp-overline">Sunday evening · Nov 22</span>
                  <h2>Finish the Work</h2>
                </div>
                <span className="mp-draft"><i aria-hidden="true" /> Draft</span>
              </header>

              <div className="mp-scripture">
                <div>
                  <span className="mp-verse-ref">2 Timothy 4:2</span>
                  <blockquote>“{VERSE}”</blockquote>
                </div>
                <button className="mp-copy" type="button" onClick={copyVerse}>
                  <CopyIcon copied={copyState === "copied"} />
                  <span>{copyState === "copied" ? "Copied" : copyState === "error" ? "Copy failed" : "Copy verse"}</span>
                </button>
              </div>

              <div className="mp-outline" aria-label="Sermon outline">
                {sections.map((section, index) => {
                  const open = openSection === section.id;
                  return (
                    <div className={`mp-outline-row ${open ? "is-open" : ""}`} key={section.id}>
                      <h3>
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={`mp-panel-${section.id}`}
                          onClick={() => setOpenSection(section.id)}
                        >
                          <span className="mp-outline-num">0{index + 1}</span>
                          <span>{section.label}</span>
                          <svg className="mp-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg>
                        </button>
                      </h3>
                      <div className="mp-outline-panel" id={`mp-panel-${section.id}`}>
                        <div><p>{section.detail}</p></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <footer className="mp-workspace-foot">
                <div className="mp-progress-copy">
                  <span><strong>3</strong> sections ready</span>
                  <span>18 min estimate</span>
                </div>
                <div className="mp-progress" aria-label="Three of three sermon sections ready"><span /></div>
              </footer>
            </article>
          </div>
        </section>

        <section className="mp-workflow" id="workflow" aria-labelledby="workflow-title">
          <div className="mp-section-head">
            <p className="mp-kicker"><span>02</span> One sermon, one continuous flow</p>
            <h2 id="workflow-title">The work stays connected.</h2>
            <p>Each state answers the next question without making the preacher hunt for the thread.</p>
          </div>

          <ol className="mp-steps">
            <li className="is-current">
              <span className="mp-step-num">1</span>
              <div><strong>Capture</strong><span>Hold the thought before it leaves.</span></div>
            </li>
            <li>
              <span className="mp-step-num">2</span>
              <div><strong>Prepare</strong><span>Shape notes, Scripture, and response.</span></div>
            </li>
            <li>
              <span className="mp-step-num">3</span>
              <div><strong>Preach</strong><span>Read clearly without visual noise.</span></div>
            </li>
            <li>
              <span className="mp-step-num">4</span>
              <div><strong>Remember</strong><span>Log what happened while it is fresh.</span></div>
            </li>
          </ol>
        </section>

        <section className="mp-pulpit" id="pulpit" aria-labelledby="pulpit-title">
          <div className="mp-pulpit-copy">
            <p className="mp-kicker mp-kicker-light"><span>03</span> Quiet in the pulpit</p>
            <h2 id="pulpit-title">The screen gets out of the sermon’s way.</h2>
            <p>
              Large type, one active point, and no decorative motion while preaching.
              Tap or use the keyboard to advance at your pace.
            </p>
            <ul>
              <li><CheckIcon /> Offline-ready reading</li>
              <li><CheckIcon /> Visible progress without a countdown</li>
              <li><CheckIcon /> Pulpit Remote when distance matters</li>
            </ul>
          </div>
          <div className="mp-device-pair" aria-label="The Preacher app in preparation and preaching modes">
            <figure className="mp-device mp-device-back">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/screenshots/web/prepare.jpg" alt="Prepare mode showing a sermon outline" width="660" height="1434" />
              <figcaption>Prepare</figcaption>
            </figure>
            <figure className="mp-device mp-device-front">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/screenshots/web/preaching.jpg" alt="Preaching mode with a focused sermon section" width="660" height="1434" />
              <figcaption>Preach</figcaption>
            </figure>
          </div>
        </section>

        <section className="mp-finish" id="trial" aria-labelledby="finish-title">
          <div className="mp-finish-card">
            <div className="mp-finish-mark" aria-hidden="true">
              <span className={previewComplete ? "is-complete" : ""}><CheckIcon /></span>
            </div>
            <p className="mp-kicker"><span>04</span> A strong finish</p>
            <h2 id="finish-title">Close the loop while the details are still near.</h2>
            <p className="mp-finish-text">
              Confirm the date, place, and service. The sermon enters your ministry record only after you choose to log it.
            </p>
            <button
              className={`mp-button mp-finish-button ${previewComplete ? "is-complete" : ""}`}
              type="button"
              onClick={() => setPreviewComplete((value) => !value)}
              aria-pressed={previewComplete}
            >
              <span>{previewComplete ? "Preview complete" : "Preview Finish & Log"}</span>
              {previewComplete ? <CheckIcon /> : <ArrowIcon />}
            </button>
            <p className="mp-demo-note" role="status">
              {previewComplete ? "This preview changed locally. No sermon was saved or uploaded." : "Interactive preview only — nothing will be saved or uploaded."}
            </p>
          </div>

          <aside className="mp-price-card" aria-label="Premium trial terms">
            <span className="mp-overline">Premium</span>
            <div className="mp-price"><strong>$4.99</strong><span>/ month</span></div>
            <p>Or $44.99 yearly. Start with a 7-day free trial.</p>
            <ul>
              <li><CheckIcon /> Unlimited sermons</li>
              <li><CheckIcon /> Strong’s word study</li>
              <li><CheckIcon /> Translation and ministry analytics</li>
              <li><CheckIcon /> Multi-device sync</li>
            </ul>
            <a className="mp-button mp-button-light" href={APP_STORE_URL}>Start on the App Store <ArrowIcon /></a>
            <small>Renews unless canceled in App Store settings before the trial ends.</small>
          </aside>
        </section>
      </main>

      <MockupFooter />
    </div>
  );
}

