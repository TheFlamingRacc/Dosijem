import { notFound } from "next/navigation";
import { hasLocale } from "../../dictionaries";
import EnPage from "./components/EnPage";
import UkPage from "./components/UkPage";

export default async function PrivacyPolicy({
  params,
}: PageProps<"/[lang]/policies/privacy-policy">) {
  const { lang } = await params;

  if (!hasLocale(lang)) return notFound();

  if (lang === "uk") return <UkPage />;
  if (lang === "en") return <EnPage />;
}
