import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../../dictionaries";
import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import PolicyContent from "../components/PolicyContent";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/policies/privacy-policy">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const { seo } = await getDictionary(lang);

  return buildMetadata({
    lang,
    path: "/policies/privacy-policy",
    title: seo.privacy.title,
    description: seo.privacy.description,
  });
}

export default async function PrivacyPolicy({
  params,
}: PageProps<"/[lang]/policies/privacy-policy">) {
  const { lang } = await params;

  if (!hasLocale(lang)) return notFound();

  const dict = await getDictionary(lang);

  return <PolicyContent data={dict.policies.privacy} />;
}
