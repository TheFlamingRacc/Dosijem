import ServicesLayout from "@/app/components/ServicesLayout";
import { hasLocale, getDictionary } from "../../dictionaries";
import { notFound } from "next/navigation";
import StyledMarquee from "@/app/components/StyledMarquee";
import Span from "../components/Span";
import { PropsWithChildren } from "react";
import { renderWithAccent } from "../renderData";

const color = "#B18C72";

const Accent = ({ children }: PropsWithChildren) => (
  <Span color={color}>{children}</Span>
);

export default async function Sites({
  params,
}: PageProps<"/[lang]/services/sites">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const { title, description } = (await getDictionary(lang)).sites;

  return (
    <>
      <ServicesLayout color={color} img="/sites-img.svg" title={title}>
        {renderWithAccent(description, Accent, false)}
      </ServicesLayout>
      <StyledMarquee color={color} text="WEBSITES" />
    </>
  );
}
