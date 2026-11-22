export type MockupSection = {
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
};

export type MockupPageData = {
  slug: string;
  numeral: string;
  label: string;
  title: string;
  intro: string;
  verse?: string;
  reference?: string;
  image?: string;
  imageAlt?: string;
  kind?: "standard" | "pricing" | "support" | "legal" | "signin" | "sermon-invite" | "group-invite";
  sections?: MockupSection[];
};

export const PRIMARY_PAGES = [
  { slug: "features", numeral: "I", label: "Features" },
  { slug: "bible", numeral: "II", label: "Bible" },
  { slug: "community", numeral: "III", label: "Community" },
  { slug: "whats-new", numeral: "IV", label: "What’s new" },
  { slug: "pricing", numeral: "V", label: "Pricing" },
] as const;

export const MOCKUP_PAGES: MockupPageData[] = [
  {
    slug: "features",
    numeral: "I",
    label: "Features",
    title: "The record of your ministry, and the pulpit in your pocket.",
    intro: "Log a sermon in thirty seconds, shape the message on the same page, then carry it into the pulpit without needing a signal.",
    verse: "Write the vision, and make it plain upon tables, that he may run that readeth it.",
    reference: "Habakkuk 2:2",
    image: "/screenshots/web/prepare.jpg",
    imageAlt: "The Preacher app in Prepare mode",
    sections: [
      {
        eyebrow: "01 · Log a sermon",
        title: "Thirty seconds, and it’s in the record.",
        body: "Title, date, place, service, Scripture. The fields stay close to the work and remember sensible defaults without inventing details.",
        bullets: ["Preached or heard", "Church and service history", "Series, people and Scripture"],
        image: "/screenshots/web/home.jpg",
        imageAlt: "The Preacher home dashboard",
      },
      {
        eyebrow: "02 · Prepare and preach",
        title: "Prepare it. Then preach it, from the same page.",
        body: "Build a clear sequence of points, Scripture and notes. In the pulpit, the interface quiets down to one active section at a time.",
        bullets: ["Offline-ready reading", "Large pulpit type", "Finish and log only when confirmed"],
        image: "/screenshots/web/preaching.jpg",
        imageAlt: "The Preacher app in Preaching mode",
      },
      {
        eyebrow: "03 · Beyond the pulpit",
        title: "Keep the good word, wherever it came from.",
        body: "Record sermons you sat under, print from your desk, translate when you choose, or share a clean link with someone who needs it.",
        bullets: ["Desktop reading", "Translation on request", "PDF and private sharing"],
        image: "/screenshots/web/sermons.jpg",
        imageAlt: "The sermon library",
      },
    ],
  },
  {
    slug: "bible",
    numeral: "II",
    label: "Bible",
    title: "The words behind the words.",
    intro: "Read offline, keep notes beside the verse, and open the original Hebrew or Greek when a word deserves a slower look.",
    verse: "Thy word is a lamp unto my feet, and a light unto my path.",
    reference: "Psalm 119:105",
    image: "/screenshots/web/bible.jpg",
    imageAlt: "The Bible reader in The Preacher",
    sections: [
      {
        eyebrow: "01 · Read",
        title: "A study Bible that still reads like a Bible.",
        body: "The page leads with Scripture. Notes, word study and sermon tools stay close without crowding the reading path.",
        bullets: ["KJV and ASV offline", "Verse notes", "Add Scripture to a sermon"],
        image: "/screenshots/web/bible.jpg",
        imageAlt: "Bible passage with selected verses",
      },
      {
        eyebrow: "02 · Study",
        title: "Tap a KJV word. Follow it to the source.",
        body: "Strong’s entries show the original word, pronunciation and meaning. Save what matters to a Word Study Notebook.",
        bullets: ["Hebrew and Greek", "Cross references", "Plain-language definitions"],
        image: "/screenshots/web/notes.jpg",
        imageAlt: "Notes in The Preacher app",
      },
      {
        eyebrow: "03 · Keep going",
        title: "Reading plans show progress earned, not pressure invented.",
        body: "See what you have read, return where you stopped and recover without a shame-based streak or fake urgency.",
        bullets: ["Optional reminders", "Actual reading progress", "Study Groups when invited"],
      },
    ],
  },
  {
    slug: "community",
    numeral: "III",
    label: "Community",
    title: "Preachers, connected.",
    intro: "Message another preacher, send a sermon in the conversation, and read together in a Study Group without turning ministry into a feed.",
    verse: "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.",
    reference: "Proverbs 27:17",
    image: "/screenshots/web/chat.jpg",
    imageAlt: "A conversation in The Preacher",
    sections: [
      {
        eyebrow: "01 · Messages",
        title: "Send a sermon in the chat.",
        body: "Shared sermons appear as readable artifacts inside the conversation. Delivery states appear only when the system knows them.",
        bullets: ["One useful read marker", "Retry for failed sends", "Report and block controls"],
        image: "/screenshots/web/chat.jpg",
        imageAlt: "Messages with a shared sermon",
      },
      {
        eyebrow: "02 · Friends",
        title: "The people you trust stay easy to find.",
        body: "Friends can message directly. New requests remain explicit, dismissible and separate from active conversations.",
        bullets: ["Search by name or username", "Neutral request choices", "Visible privacy boundaries"],
      },
      {
        eyebrow: "03 · Study Groups",
        title: "Read together, without turning progress into pressure.",
        body: "A group keeps a shared plan, conversation and sermons in one place. Members can see what the group shares and leave when they choose.",
        bullets: ["Clear group visibility", "Admin controls", "Optional reading reminders"],
        image: "/screenshots/web/group.jpg",
        imageAlt: "A Study Group in The Preacher",
      },
    ],
  },
  {
    slug: "whats-new",
    numeral: "IV",
    label: "What’s new",
    title: "Small things that save a lot of Sundays.",
    intro: "The newest tools are practical: faster capture, quieter preaching, a remote when the phone is out of reach, and reading that stays connected.",
    verse: "Behold, I will do a new thing; now it shall spring forth; shall ye not know it?",
    reference: "Isaiah 43:19",
    image: "/screenshots/web/remote.jpg",
    imageAlt: "Pulpit Remote in The Preacher",
    sections: [
      {
        eyebrow: "01 · Voice notes",
        title: "Catch the thought before the wording leaves.",
        body: "Record a voice note where the idea belongs. Playback remains controlled and never starts without a tap.",
        bullets: ["Visible recording state", "No autoplay", "Keep or discard before saving"],
        image: "/screenshots/web/voice.jpg",
        imageAlt: "Voice notes in The Preacher",
      },
      {
        eyebrow: "02 · Pulpit Remote",
        title: "Advance the message from where you are standing.",
        body: "A nearby device becomes a simple remote with large controls and an ordinary on-screen alternative for every gesture.",
        bullets: ["Previous and next", "Current section preview", "Clear connection state"],
        image: "/screenshots/web/remote.jpg",
        imageAlt: "Pulpit Remote controls",
      },
      {
        eyebrow: "03 · Also new",
        title: "Illustrations, reading plans and the home-screen widget.",
        body: "Keep an illustration library, return to a reading plan, and see the next useful item without opening the full app.",
        bullets: ["Illustration notebook", "Reading progress", "Verse and next-service widget"],
        image: "/screenshots/web/timeline.jpg",
        imageAlt: "Ministry timeline in The Preacher",
      },
    ],
  },
  {
    slug: "pricing",
    numeral: "V",
    label: "Pricing",
    title: "Free to start. Premium when you need it.",
    intro: "The free plan covers the pulpit essentials. Premium adds the deeper study, history and sync tools used across a growing ministry record.",
    verse: "…freely ye have received, freely give.",
    reference: "Matthew 10:8",
    kind: "pricing",
  },
  {
    slug: "tour",
    numeral: "VI",
    label: "Tour",
    title: "Walk through one sermon, from first thought to faithful record.",
    intro: "A guided look at the real screens: dashboard, preparation, preaching, library, Bible study and ministry timeline.",
    image: "/screenshots/web/home.jpg",
    imageAlt: "The Preacher dashboard",
    sections: [
      { eyebrow: "01 · Open the app", title: "Everything useful, at a glance.", body: "See recent sermons, the next useful action and your ministry record without a wall of decorative metrics.", image: "/screenshots/web/home.jpg", imageAlt: "Home dashboard" },
      { eyebrow: "02 · Build the message", title: "Stack points and Scripture into a clear outline.", body: "The order stays visible and every section can be opened, moved or edited without losing the surrounding context.", image: "/screenshots/web/prepare.jpg", imageAlt: "Prepare mode" },
      { eyebrow: "03 · Go live", title: "One active point, large type, no visual noise.", body: "Preaching mode keeps the screen awake, shows honest elapsed time and leaves movement under the preacher’s control.", image: "/screenshots/web/preaching.jpg", imageAlt: "Preaching mode" },
      { eyebrow: "04 · Return to the library", title: "Every sermon stays findable.", body: "Browse by series, date and place, then reopen the full message or the service record.", image: "/screenshots/web/sermons.jpg", imageAlt: "Sermon library" },
      { eyebrow: "05 · Study the Word", title: "Read first. Open tools when needed.", body: "KJV and ASV remain available offline, with Strong’s on KJV words and notes kept beside Scripture.", image: "/screenshots/web/bible.jpg", imageAlt: "Bible reader" },
      { eyebrow: "06 · See the timeline", title: "A ministry record that grows with the work.", body: "The timeline keeps preached and attended services in chronological order with search and filters.", image: "/screenshots/web/timeline.jpg", imageAlt: "Ministry timeline" },
    ],
  },
  {
    slug: "support",
    numeral: "VII",
    label: "Support",
    title: "Help that starts with the answer.",
    intro: "Search the common questions, see the exact recovery path, or contact support without working through a maze.",
    kind: "support",
  },
  {
    slug: "privacy",
    numeral: "VIII",
    label: "Privacy",
    title: "Your ministry record remains yours.",
    intro: "A readable concept layout for the existing Privacy Policy. The final implementation should carry the approved legal text over unchanged.",
    kind: "legal",
    sections: [
      { eyebrow: "01", title: "Information you provide", body: "Account details, sermon and ministry records, Bible notes, preparation notes, optional community content, reports and photos you choose to attach." },
      { eyebrow: "02", title: "Information collected automatically", body: "Typed location names, on-device scanned-note processing, anonymous usage and diagnostics, and preferences stored on your device." },
      { eyebrow: "03", title: "How information is used", body: "To operate your account, sync your ministry data, display history, restore data, improve performance and fix bugs." },
      { eyebrow: "04", title: "Storage, security and third parties", body: "Local SQLite and encrypted Firebase services support offline use and sync. Translation occurs only when you choose it." },
      { eyebrow: "05", title: "Retention and your rights", body: "Access, correction, deletion and portability routes stay visible, including in-app account deletion and support contact." },
    ],
  },
  {
    slug: "terms",
    numeral: "IX",
    label: "Terms",
    title: "Plain structure for the terms that govern the app.",
    intro: "A readable concept layout for the existing Terms of Use. The approved legal wording remains the source of truth.",
    kind: "legal",
    sections: [
      { eyebrow: "01", title: "Acceptance and use", body: "Using the app means agreeing to the Terms and using the ministry tools lawfully and as intended." },
      { eyebrow: "02", title: "Accounts and your content", body: "You remain responsible for account access. Sermon notes, highlights and other content you create remain yours." },
      { eyebrow: "03", title: "Community conduct", body: "Community profiles, messages and Study Groups have clear visibility boundaries, reporting tools and zero tolerance for abusive content." },
      { eyebrow: "04", title: "Intellectual property and warranties", body: "The app design and code remain protected; service limitations and warranty terms stay explicit." },
      { eyebrow: "05", title: "Termination, changes and contact", body: "Account deletion, enforcement, updates to terms and the contact route remain easy to find." },
    ],
  },
  {
    slug: "signin",
    numeral: "X",
    label: "Sign in",
    title: "Return to your sermon library.",
    intro: "A focused sign-in concept with persistent labels, preserved input and visible recovery paths.",
    kind: "signin",
  },
  {
    slug: "sermon-invite",
    numeral: "XI",
    label: "Shared sermon",
    title: "A sermon shared without the surrounding app getting in the way.",
    intro: "The title, preacher, Scripture and outline lead. Sign-in remains optional unless the visitor chooses an account-only action.",
    kind: "sermon-invite",
  },
  {
    slug: "group-invite",
    numeral: "XII",
    label: "Group invite",
    title: "Know the group before you join it.",
    intro: "The invitation names the group, church, reading plan and visibility before the visitor makes a commitment.",
    kind: "group-invite",
  },
];

export const MOCKUP_SLUGS = MOCKUP_PAGES.map((page) => page.slug);

export function getMockupPage(slug: string) {
  return MOCKUP_PAGES.find((page) => page.slug === slug);
}

