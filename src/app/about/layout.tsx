import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import { Box, Stack } from "@mui/material";
import MobileNavBar from "../components/SidePanel/MobileNavBar";

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Stack
        width="100%"
        px={{ xs: 2, md: 3, lg: 6 }}
        mb={{ xs: 5, md: 6, lg: 7 }}
      >
        <MobileNavBar colors="default" />
        <Box
          sx={{
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>
      </Stack>
      <Footer />
    </>
  );
}
