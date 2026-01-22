import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import MobileNavBar from "@/app/components/SidePanel/MobileNavBar";
import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";

export default async function HomeLayout({
  children,
  params,
}: PropsWithChildren & LayoutProps<"/[lang]/home">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  return (
    <>
      <Box
        height={{ xs: "100vh", md: "100vh", lg: "100%" }}
        minWidth="100%"
        position="relative"
        pt={{ xs: 0, md: "min(50px, 5vw)", lg: "min(120px, 6vw)" }}
        pl={{
          xs: 2,
          md: "min(4vw, 8vh)",
          lg: "clamp(0px, min(5vw, 10vh), 120px)",
        }}
        pr={{ xs: 2, md: 0 }}
        pb={{ xs: 0, md: 2, lg: "min(40px, 2vw)" }}
      >
        <MobileNavBar />
        {children}
        <Box
          component="img"
          src="/MarqueeHome.svg"
          position="absolute"
          height={{ xs: "calc(100vh - 60px - 218px)", md: "100%" }}
          right={{ xs: 46, md: 70, lg: "26%" }}
          top={{ xs: 60, md: 0 }}
          zIndex={1}
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.5s",
          }}
        />
        <Box
          component="img"
          src="/Akrop.svg"
          position="absolute"
          display={{ xs: "none", lg: "block" }}
          height="100%"
          right={20}
          top={0}
          zIndex={1}
          sx={{
            opacity: 0,
            animation: "FadeSlideInRight 0.7s ease forwards",
            animationDelay: "0.6s",
          }}
        />
      </Box>
      <Footer dict={dict} />
    </>
  );
}
