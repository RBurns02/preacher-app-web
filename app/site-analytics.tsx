"use client";

// Vercel Analytics + Speed Insights, with private codes stripped from the
// URL: /g/<code> (Study Group invites — a code is enough to join) and
// /s/<code> (sermon shares) are reported as /g/[code] and /s/[code].
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const hideCodes = (url: string) =>
  url.replace(/\/(g|s)\/[^/?#]+/, "/$1/[code]");

export function SiteAnalytics() {
  return (
    <>
      <Analytics beforeSend={(event) => ({ ...event, url: hideCodes(event.url) })} />
      <SpeedInsights beforeSend={(data) => ({ ...data, url: hideCodes(data.url) })} />
    </>
  );
}
