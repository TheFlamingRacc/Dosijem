import ServicesLayout from "@/app/components/ServicesLayout";
import { hasLocale, getDictionary } from "../../dictionaries";
import { notFound } from "next/navigation";
import StyledMarquee from "@/app/components/StyledMarquee";
import Span from "../components/Span";
import { PropsWithChildren } from "react";
import { renderWithAccent } from "../renderData";

const color = "#B6865E";

const Accent = ({ children }: PropsWithChildren) => (
  <Span color={color}>{children}</Span>
);

export default async function Skins({
  params,
}: PageProps<"/[lang]/services/skins">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const { title, description } = (await getDictionary(lang)).skins;

  return (
    <>
      <ServicesLayout color={color} img="/skins-img.svg" title={title}>
        {renderWithAccent(description, Accent)}.
      </ServicesLayout>
      <StyledMarquee color={color} text="SKINS" />
    </>
  );
}
