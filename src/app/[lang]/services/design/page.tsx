import ServicesLayout from "@/app/components/ServicesLayout";
import { hasLocale, getDictionary } from "../../dictionaries";
import { notFound } from "next/navigation";
import StyledMarquee from "@/app/components/StyledMarquee";
import { PropsWithChildren } from "react";
import Span from "../components/Span";
import { renderWithAccent } from "../renderData";

const color = "#EADDD4";

const Accent = ({ children }: PropsWithChildren) => (
  <Span color={color}>{children}</Span>
);

export default async function Design({
  params,
}: PageProps<"/[lang]/services/design">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const { title, description } = (await getDictionary(lang)).design;
  return (
    <>
      <ServicesLayout title={title} color="#B39E8D" img="/design-img.svg">
        {renderWithAccent(description, Accent, false)}
      </ServicesLayout>
      <StyledMarquee color={color} text="DESIGN" />
    </>
  );
}
