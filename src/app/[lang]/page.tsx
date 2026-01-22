import { notFound, redirect } from "next/navigation";
import { hasLocale } from "./dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  redirect(`/${lang}/home`);
}
