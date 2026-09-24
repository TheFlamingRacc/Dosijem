import ServicesLayout from "@/app/components/ServicesLayout";
import { hasLocale, getDictionary } from "../../dictionaries";
import type { Metadata } from "next";
import { buildMetadata } from "../../seo";
import { notFound } from "next/navigation";
import StyledMarquee from "@/app/components/StyledMarquee";
import Span from "../components/Span";
import { PropsWithChildren } from "react";
import { renderWithAccent } from "../renderData";

const color = "#BB8EFF";

const Accent = ({ children }: PropsWithChildren) => (
  <Span color={color}>{children}</Span>
);

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services/mods">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const { seo } = await getDictionary(lang);

  return buildMetadata({
    lang,
    path: "/services/mods",
    title: seo.mods.title,
    description: seo.mods.description,
  });
}

export default async function Mods({
  params,
}: PageProps<"/[lang]/services/mods">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const { title, description } = (await getDictionary(lang)).mods;

  return (
    <>
      <ServicesLayout img="/mods-img.webp" title={title} color={color}>
        {renderWithAccent(description, Accent)}.
      </ServicesLayout>
      <StyledMarquee color={color} text="MODS" />
    </>
  );
}
