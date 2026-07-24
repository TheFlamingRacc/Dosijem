import { notFound } from "next/navigation";
import { hasLocale } from "./dictionaries";

export function generateStaticParams() {
  return [{ lang: "uk" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return children;
}
