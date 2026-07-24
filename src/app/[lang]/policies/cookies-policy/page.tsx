import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../../dictionaries";
import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import PolicyContent from "../components/PolicyContent";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/policies/cookies-policy">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const { seo } = await getDictionary(lang);

  return buildMetadata({
    lang,
    path: "/policies/cookies-policy",
    title: seo.cookies.title,
    description: seo.cookies.description,
  });
}

export default async function CookiesPolicy({
  params,
}: PageProps<"/[lang]/policies/cookies-policy">) {
  const { lang } = await params;

  if (!hasLocale(lang)) return notFound();

  const dict = await getDictionary(lang);

  return <PolicyContent data={dict.policies.cookies} />;
}
