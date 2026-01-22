import { Box, Stack } from "@mui/material";
import MobileNavBar from "@/app/components/SidePanel/MobileNavBar";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import FormSection from "../components/FormSection";
import { hasLocale, getDictionary } from "../dictionaries";
import { notFound } from "next/navigation";

export default async function ServicesLayout({
  children,
  params,
}: PropsWithChildren & LayoutProps<"/[lang]/services">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Stack
        spacing={2}
        minHeight="100%"
        minWidth="100%"
        px={{ xs: 0, md: 2 }}
        pb={2}
      >
        <Box position="sticky" top={20} zIndex={100} px={{ xs: 2, md: 0 }}>
          <MobileNavBar />
        </Box>
        {children}
        <FormSection />
      </Stack>
      <Footer dict={dict} />
    </>
  );
}
