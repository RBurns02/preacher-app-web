# Preacher Log — Marketing Website

## What This Is
Marketing landing page for the Preacher Log mobile app (Flutter, iOS + Android). Single-page site promoting the app with download CTAs, feature sections, and app mockups.

## Repo & Deployment
- **GitHub**: github.com/RBurns02/Preacher-App-Web
- **Hosting**: Vercel (connect GitHub repo, auto-deploys on push)
- **Live URL**: https://thepreacherapp.com

## Tech Stack
- **Next.js 14** (App Router) with `output: 'export'` for static site generation
- **TypeScript**
- **Tailwind CSS** for all styling
- **No external component libraries** — everything is custom inline
- All icons are inline SVG components at the top of `page.tsx` (no icon package dependency)

## File Structure
```
preacher-web/
├── app/
│   ├── globals.css      # Tailwind imports, custom utilities, font import
│   ├── layout.tsx       # Root layout, metadata
│   └── page.tsx         # Entire landing page (all sections in one file)
├── public/              # Static assets (add logo.png, screenshots here)
├── next.config.mjs      # Static export config
├── tailwind.config.ts   # Custom colors, animations, keyframes
├── tsconfig.json
└── package.json
```

## Home page (redesign, `app/_home/`)
The home page is laid out like a pulpit Bible: an ink hero, onionskin "chapters"
(I Log, II Prepare & preach, III Bible, IV Together, V New tools, VI Pricing), and a
thumb index down the right edge that fills in as you scroll (chips on phones).
- `app/page.tsx` assembles it; components live in `app/_home/` (ui, shell, demos,
  together, tools, pricing). Each chapter has a small working demo, not a description.
- Palette: Tailwind `pb.*` colours + `.pb-*` classes in `globals.css`, all scoped under
  `.pb-home` so the other pages (web reader, invites, legal, support, tour) are unchanged.
- Cardo is self-hosted in `public/fonts` (OFL). Scripture is red letter; only real KJV
  text from the app's bundled Bible, and Strong's entries from its lexicon.
- Screenshots for the page are 660px JPGs in `public/screenshots/web/` (named for what
  they actually show).
- Motion respects prefers-reduced-motion; reveal-on-scroll only hides content once JS
  has added `html.pb-armed`.

## Design System (other pages)

### Colors
| Token | Value | Use |
|-------|-------|-----|
| Background | `#07070F` | Page background |
| Surface | `#0E0E1C` | Card backgrounds |
| Surface-2 | `#14142A` | Elevated cards |
| Gold-600 | `#D97706` | Primary accent, gradients |
| Gold-500 | `#F59E0B` | Accent mid |
| Gold-300 | `#FDE68A` | Accent light, gradient end |

### Text Gradients (defined in globals.css)
- `.text-gold-gradient` — amber/gold gradient, used for hero headline accent word and section callouts
- `.text-silver-gradient` — white/silver gradient, used for primary headline text

### Card Style
```css
background: rgba(255,255,255,0.025);
border: 1px solid rgba(255,255,255,0.07);  /* .card-border */
border-radius: 24px; (rounded-3xl)
```

Gold accent card:
```css
background: linear-gradient(135deg, rgba(217,119,6,0.08), rgba(217,119,6,0.02));
border: 1px solid rgba(217,119,6,0.25);   /* .card-gold-border */
```

### Nav
Fixed, backdrop-blur, `rgba(7,7,15,0.85)` background. Logo left, nav links center (desktop), CTA button right. Mobile: hamburger menu with dropdown.

### Glow Effects
- `.glow-gold-sm` — `box-shadow: 0 0 30px rgba(217,119,6,0.15)`
- `.glow-gold-lg` — `box-shadow: 0 0 80px rgba(217,119,6,0.2), 0 0 160px rgba(217,119,6,0.08)`

## Page Sections (in order)
1. **Nav** — fixed, with mobile hamburger
2. **Hero** — badge, headline, subtitle, download buttons, `PhoneMockup` component (CSS-only phone frame)
3. **Stats strip** — 4 quick stats (Every / 4 / Full / Free)
4. **Features grid** (`#features`) — 6 `FeatureCard` components in a 3-col grid
5. **Sermon Log spotlight** — left visual (mock sermon card UI), right text + checklist
6. **Bible Study spotlight** — right visual (mock Bible reader with colored highlights), left text + checklist
7. **Quote section** — single impactful quote
8. **Final CTA** (`#download`) — centered download buttons
9. **Footer** — logo, nav links, copyright

## Components (all in page.tsx)
- `PhoneMockup` — animated CSS phone frame with mock app UI (sermon cards, stats, highlight preview). Uses `animate-float` class.
- `FeatureCard` — icon + title + description card, optional `accent` prop for gold styling
- `DownloadButton` — iOS (white) or Android (ghost) button, `size` prop (md/lg)
- `Nav` — with mobile state managed by `useState`

## Placeholder Content (needs updating when ready)
- **App Store link**: `href="#"` in both `DownloadButton` instances — replace with real App Store URL when app launches
- **Google Play link**: same — replace with real Play Store URL
- **"Coming soon to iOS & Android"** subtext in hero — remove when app is live
- **Screenshots**: `PhoneMockup` is a CSS mockup — replace with real device screenshots when available
- **Stats strip**: "Every / 4 / Full / Free" — update with real numbers once app has users
- **Footer links**: Privacy Policy, Terms of Use, Support, Contact all link to `#` — create real pages

## Things To Add In Future Sessions
- Real app screenshots in the phone mockup or a screenshot carousel
- Privacy Policy page (`app/privacy/page.tsx`)
- Support / Contact page
- Testimonials section (once real users exist)
- App Store / Google Play badges (official badge images in `public/`)
- Open Graph image for social sharing (`public/og-image.png`)
- Favicon (`public/favicon.ico`)
- Analytics (Vercel Analytics — one line of code)
- The logo from the Flutter app (`assets/logo.png`) copied to `public/logo.png`

## Deployment Notes
- Vercel detects Next.js automatically — no build config needed
- `output: 'export'` in `next.config.mjs` means it builds as static HTML/CSS/JS
- After connecting to Vercel: every push to `main` auto-deploys
- Custom domain: add in Vercel project → Settings → Domains (this is also where Firebase DNS records go if using the same domain)

## App Context
The mobile app this site promotes:
- **Name**: The Preacher (App Store name; formerly "Preacher Log")
- **Platform**: iOS (live on the App Store, id6775250750) + Android planned (Flutter)
- **Purpose**: Sermon logging, Bible study, ministry tracking for pastors/ministers
- **Bible versions**: KJV and ASV ONLY — never claim ESV or NIV on the site (licensed translations the app does not carry)
- **Strong's Concordance**: real and shipped — interlinear Hebrew/Greek on KJV words, Word Study Notebook
- **Pricing**: 3-day free trial, then $4.99/month or $44.99/year (25% savings), via App Store subscription
- **Key features**: Log sermons, highlight Bible verses, track locations, prepare messages, offline access, cloud sync
- **App repo**: github.com/RBurns02/preacher (branch: `claude/app-rework`)
