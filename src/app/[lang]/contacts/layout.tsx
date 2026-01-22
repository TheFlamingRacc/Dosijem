import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import MobileNavBar from "@/app/components/SidePanel/MobileNavBar";
import { hasLocale, getDictionary } from "../dictionaries";
import { notFound } from "next/navigation";

export default async function ContactsLayout({
  children,
  params,
}: PropsWithChildren & LayoutProps<"/[lang]/contacts">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  return (
    <>
      <Stack
        minHeight="100%"
        minWidth="100%"
        pl={{
          xs: 2,
          md: "min(4vw, 8vh)",
          lg: "clamp(0px, min(5vw, 10vh), 120px)",
        }}
        pr={{ xs: 2, md: 0 }}
        pb={{ xs: 6, md: "min(12vw, 24vh)", lg: "min(7vw, 14vh)" }}
      >
        <MobileNavBar />
        {children}
      </Stack>
      <Footer dict={dict} />
    </>
  );
}
