import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import { Box, Stack } from "@mui/material";
import MobileNavBar from "@/app/components/SidePanel/MobileNavBar";
import { hasLocale, getDictionary } from "../dictionaries";
import { notFound } from "next/navigation";

export default async function AboutLayout({
  children,
  params,
}: PropsWithChildren & LayoutProps<"/[lang]/about">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Stack
        width="100%"
        px={{ xs: 2, md: 3, lg: 6 }}
        mb={{ xs: 5, md: 6, lg: 7 }}
      >
        <MobileNavBar />
        <Box
          sx={{
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>
      </Stack>
      <Footer dict={dict} />
    </>
  );
}
