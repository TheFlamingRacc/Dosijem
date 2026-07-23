import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../../dictionaries";
import PolicyContent from "../components/PolicyContent";

export default async function PrivacyPolicy({
  params,
}: PageProps<"/[lang]/policies/privacy-policy">) {
  const { lang } = await params;

  if (!hasLocale(lang)) return notFound();

  const dict = await getDictionary(lang);

  return <PolicyContent data={dict.policies.privacy} />;
}
