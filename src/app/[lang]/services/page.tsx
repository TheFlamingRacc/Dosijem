import { redirect } from "next/navigation";

export default async function ServicesPage({
  params,
}: PageProps<"/[lang]/services">) {
  const { lang } = await params;

  redirect(`/${lang}/services/plugins`);
}
