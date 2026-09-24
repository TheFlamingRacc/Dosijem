import ServicesLayout from "@/app/components/ServicesLayout";
import { hasLocale, getDictionary } from "../../dictionaries";
import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import { notFound } from "next/navigation";
import StyledMarquee from "@/app/components/StyledMarquee";
import Span from "../components/Span";
import { PropsWithChildren } from "react";
import { renderWithAccent } from "../renderData";

const color = "#B6865E";

const Accent = ({ children }: PropsWithChildren) => (
  <Span color={color}>{children}</Span>
);

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services/skins">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const { seo } = await getDictionary(lang);

  return buildMetadata({
    lang,
    path: "/services/skins",
    title: seo.skins.title,
    description: seo.skins.description,
  });
}

export default async function Skins({
  params,
}: PageProps<"/[lang]/services/skins">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const { title, description } = (await getDictionary(lang)).skins;

  return (
    <>
      <ServicesLayout color={color} img="/skins-img.webp" title={title}>
        {renderWithAccent(description, Accent)}.
      </ServicesLayout>
      <StyledMarquee color={color} text="SKINS" />
    </>
  );
}
