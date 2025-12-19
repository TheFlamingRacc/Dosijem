import { Box, Stack } from "@mui/material";
import MobileNavBar from "../components/SidePanel/MobileNavBar";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import StyledMarquee from "../components/StyledMarquee";
import FormSection from "../components/FormSection";

export default function ServersLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Stack
        spacing={2}
        minHeight="100%"
        minWidth="100%"
        px={{ xs: 0, md: 2 }}
        pb={2}
      >
        <MobileNavBar px={2} colors="servers" />
        {children}

        <StyledMarquee color="#D9937A" text="SERVERS" />
        <FormSection />
      </Stack>
      <Footer />
    </>
  );
}
