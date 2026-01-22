import ServicesLayout from "@/app/components/ServicesLayout";
import { hasLocale, getDictionary } from "../../dictionaries";
import { notFound } from "next/navigation";
import StyledMarquee from "@/app/components/StyledMarquee";
import Span from "../components/Span";
import { PropsWithChildren } from "react";
import { renderWithAccent } from "../renderData";

const color = "#E1AAA2";

const Accent = ({ children }: PropsWithChildren) => (
  <Span color={color}>{children}</Span>
);

export default async function Building({
  params,
}: PageProps<"/[lang]/services/building">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const { title, description } = (await getDictionary(lang)).building;
  return (
    <>
      <ServicesLayout title={title} img="/buildings-img.svg" color={color}>
        {renderWithAccent(description, Accent)}
      </ServicesLayout>
      <StyledMarquee color={color} text="BUILDINGS" />
    </>
  );
}
