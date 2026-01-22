import { redirect } from "next/navigation";

export default async function PoliciesPage({
  params,
}: PageProps<"/[lang]/policies">) {
  const { lang } = await params;

  redirect(`/${lang}/policies/privacy-policy`);
}
