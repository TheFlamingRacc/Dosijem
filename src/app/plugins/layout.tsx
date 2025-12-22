import { Box, Stack } from "@mui/material";
import MobileNavBar from "../components/SidePanel/MobileNavBar";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import StyledMarquee from "../components/StyledMarquee";
import FormSection from "../components/FormSection";

export default function PluginsLayout({ children }: PropsWithChildren) {
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
          <MobileNavBar colors="plugins" />
        </Box>
        {children}
        <StyledMarquee color="#D99592" text="PLUGINS" />
        <FormSection />
      </Stack>
      <Footer />
    </>
  );
}
