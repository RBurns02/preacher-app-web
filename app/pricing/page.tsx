import type { Metadata } from "next";
import { Faq, Pricing } from "../_home/pricing";
import { Divider, SitePage } from "../_home/site";
import { Reveal } from "../_home/ui";

export const metadata: Metadata = {
  title: "Pricing — The Preacher",
  description: "Free to start. Premium is $4.99 a month or $44.99 a year, with 7 days free.",
};

export default function PricingPage() {
  return (
    <SitePage
      slug="pricing"
      title={<>Free to start. Premium when you need it.</>}
      intro="Read the Bible, message other preachers and keep your first three sermons free. Premium is $4.99 a month or $44.99 a year, with 7 days free."
      verse="…freely ye have received, freely give."
      reference="Matthew 10:8"
    >
      <section className="pb-band">
        <div className="mx-auto max-w-4xl px-5">
          <Divider numeral="1" label="Plans" />
          <Reveal className="mt-12"><Pricing /></Reveal>
        </div>
      </section>
      <section className="pb-band is-alt">
        <div className="mx-auto max-w-3xl px-5">
          <Divider numeral="2" label="Questions" />
          <div className="mt-12"><Faq /></div>
          <p className="mt-6 text-sm text-pb-muted">
            Something else? <a href="/support/" className="underline underline-offset-4">Get support</a>.
          </p>
        </div>
      </section>
    </SitePage>
  );
}
