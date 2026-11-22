import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMockupPage, MOCKUP_SLUGS } from "../page-data";
import { MockupSubpage } from "../subpage";

export const dynamicParams = false;

export function generateStaticParams() {
  return MOCKUP_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getMockupPage(params.slug);
  return page ? { title: `${page.label} — The Preacher mockup`, description: page.intro } : {};
}

export default function MockupRoute({ params }: { params: { slug: string } }) {
  const page = getMockupPage(params.slug);
  if (!page) notFound();
  return <MockupSubpage page={page} />;
}

