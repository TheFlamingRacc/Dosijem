import ServicesLayout from "@/app/components/ServicesLayout";
import { hasLocale, getDictionary } from "../../dictionaries";
import { notFound } from "next/navigation";
import StyledMarquee from "@/app/components/StyledMarquee";
import Span from "../components/Span";
import { PropsWithChildren } from "react";
import { renderWithAccent } from "../renderData";

const color = "#D9937A";

const Accent = ({ children }: PropsWithChildren) => (
  <Span color={color}>{children}</Span>
);

export default async function Servers({
  params,
}: PageProps<"/[lang]/services/servers">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const { title, description } = (await getDictionary(lang)).servers;

  return (
    <>
      <ServicesLayout color="#3F3F4B" img="/servers-img.svg" title={title}>
        {renderWithAccent(description, Accent, false)}
      </ServicesLayout>
      <StyledMarquee color={color} text="SERVERS" />
    </>
  );
}
