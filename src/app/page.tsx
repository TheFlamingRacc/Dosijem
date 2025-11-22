import { Box } from "@mui/material";
import DesktopFooter from "./components/Footer/DesktopFooter";

export default function Home() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={{ xs: "100vh", lg: "calc(90vh - min(7vw, 10vh))" }}
        width={"100%"}
      ></Box>
      <DesktopFooter />
    </>
  );
}
