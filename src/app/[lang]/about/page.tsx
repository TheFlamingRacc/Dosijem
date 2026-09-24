import { getDictionary, hasLocale } from "../dictionaries";
import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import HomeAboutStage from "../components/HomeAboutStage";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const { seo } = await getDictionary(lang);

  return buildMetadata({
    lang,
    path: "/about",
    title: seo.about.title,
    description: seo.about.description,
  });
}

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return <HomeAboutStage lang={lang} initial="about" />;
}
