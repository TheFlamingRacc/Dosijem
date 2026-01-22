import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import MobileNavBar from "@/app/components/SidePanel/MobileNavBar";
import Footer from "../components/Footer";
import { hasLocale, getDictionary } from "../dictionaries";
import { notFound } from "next/navigation";

export default async function ReviewsLayout({
  children,
  params,
}: PropsWithChildren & LayoutProps<"/[lang]/reviews">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  return (
    <>
      <Box width="100%" height="100%">
        <Box position="sticky" top={20} zIndex={100} px={{ xs: 2, md: 0 }}>
          <MobileNavBar />
        </Box>
        {children}
      </Box>
      <Footer dict={dict} />
    </>
  );
}
