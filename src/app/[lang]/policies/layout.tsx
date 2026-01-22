import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import MobileNavBar from "@/app/components/SidePanel/MobileNavBar";
import Footer from "../components/Footer";
import { hasLocale, getDictionary } from "../dictionaries";
import { notFound } from "next/navigation";

export default async function PoliciesLayout({
  children,
  params,
}: PropsWithChildren & LayoutProps<"/[lang]/policies">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Box
        width="100%"
        minHeight="100vh"
        px={{ xs: 2, md: 4, lg: 9 }}
        py={{ xs: 0, md: 5, lg: 12 }}
        pb={{ xs: 5 }}
      >
        <MobileNavBar />
        {children}
      </Box>
      <Footer dict={dict} />
    </>
  );
}
