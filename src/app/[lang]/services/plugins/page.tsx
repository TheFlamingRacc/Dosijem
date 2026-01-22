import ServicesLayout from "@/app/components/ServicesLayout";
import { hasLocale, getDictionary } from "../../dictionaries";
import { notFound } from "next/navigation";
import StyledMarquee from "@/app/components/StyledMarquee";
import Span from "../components/Span";
import { PropsWithChildren } from "react";
import { renderWithAccent } from "../renderData";

const color = "#D99592";

const Accent = ({ children }: PropsWithChildren) => (
  <Span color={color}>{children}</Span>
);

export default async function Plugins({
  params,
}: PageProps<"/[lang]/services/plugins">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const { title, description } = (await getDictionary(lang)).plugins;

  return (
    <>
      <ServicesLayout color={color} img="/plugin-img.svg" title={title}>
        {renderWithAccent(description, Accent)}
      </ServicesLayout>
      <StyledMarquee color={color} text="PLUGINS" />
    </>
  );
}
