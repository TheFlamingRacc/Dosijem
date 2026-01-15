import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import { Stack } from "@mui/material";
import MobileNavBar from "../components/SidePanel/MobileNavBar";

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Stack
        mb={{ xs: 5, md: 6, lg: 7 }}
        px={{ xs: 2, md: 3, lg: 6 }}
        width="100%"
      >
        <MobileNavBar colors="default" />
        {children}
      </Stack>
      <Footer />
    </>
  );
}
