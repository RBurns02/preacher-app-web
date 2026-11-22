import { MOCKUP_PAGES, PRIMARY_PAGES } from "./page-data";

const APP_STORE_URL = "https://apps.apple.com/us/app/the-preacher/id6775250750";

export function MockupNav({ current }: { current?: string }) {
  return (
    <header className="mp-nav mp-nav-shared">
      <a className="mp-brand" href="/mockup/" aria-label="The Preacher mockup home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/favicon.png" alt="" width="36" height="36" />
        <span>The Preacher</span>
      </a>
      <nav className="mp-desktop-nav" aria-label="Mockup pages">
        {PRIMARY_PAGES.map((page) => (
          <a key={page.slug} href={`/mockup/${page.slug}/`} aria-current={current === page.slug ? "page" : undefined}>{page.label}</a>
        ))}
      </nav>
      <div className="mp-nav-actions">
        <details className="mp-all-pages">
          <summary>Pages</summary>
          <nav aria-label="Main mockup pages">
            {PRIMARY_PAGES.map((page) => (
              <a key={page.slug} href={`/mockup/${page.slug}/`} aria-current={current === page.slug ? "page" : undefined}>
                {page.label}
              </a>
            ))}
          </nav>
        </details>
        <a className="mp-nav-cta" href={APP_STORE_URL}>Get the app</a>
      </div>
    </header>
  );
}

export function MockupFooter() {
  return (
    <footer className="mp-footer mp-footer-expanded">
      <div className="mp-footer-lead">
        <div className="mp-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.png" alt="" width="32" height="32" />
          <span>The Preacher</span>
        </div>
        <p>The record of your ministry.</p>
      </div>
      <nav aria-label="All mockup pages">
        {MOCKUP_PAGES.map((page) => <a key={page.slug} href={`/mockup/${page.slug}/`}>{page.label}</a>)}
      </nav>
      <a className="mp-current-site-link" href="/">View the current website</a>
    </footer>
  );
}

