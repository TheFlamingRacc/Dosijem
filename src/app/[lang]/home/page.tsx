import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import HomeAboutStage from "../components/HomeAboutStage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/home">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const { seo } = await getDictionary(lang);

  return buildMetadata({
    lang,
    path: "/home",
    title: seo.home.title,
    description: seo.home.description,
    absoluteTitle: true,
  });
}

export default async function Home({ params }: PageProps<"/[lang]/home">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return <HomeAboutStage lang={lang} initial="home" />;
}
