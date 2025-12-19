"use client";

import { Box, Stack, Divider, IconButton, Typography } from "@mui/material";
import LogoButton from "./LogoButton";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("./Navigation"), {
  ssr: false,
});

export default function SidePanel() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguage = () => {
    const parts = pathname.split("/").filter(Boolean);
    const enIndex = parts.indexOf("en");

    if (enIndex !== -1) {
      parts.splice(enIndex, 1);
    } else {
      parts.push("en");
    }

    const newPath = "/" + parts.join("/");
    router.push(newPath);
  };
  return (
    <Box display={{ xs: "none", md: "flex" }} maxHeight="100%" width="9.5%">
      <Stack
        justifyContent={{ md: "normal", lg: "space-between" }}
        p={{ md: "min(1vw, 2vh)", lg: 2.5 }}
        gap={1}
      >
        <LogoButton />

        <Navigation />
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Stack
            borderRadius="99px"
            sx={{ backgroundColor: "background.default" }}
            mx="auto"
            width="85%"
            height="auto"
            position="relative"
            alignItems="center"
            justifyContent="center"
            p="min(0.5vw, 1vh)"
            gap="min(0.5vw, 1vh)"
          >
            <IconButton
              sx={{ aspectRatio: "1/1", padding: "0", width: "90%" }}
              onClick={() =>
                router.push(`/contacts${pathname.includes("/en") ? "/en" : ""}`)
              }
            >
              <Box
                height="60%"
                sx={{ aspectRatio: 1 }}
                component="img"
                src={
                  pathname.includes("/contacts")
                    ? "/contacts-icon-t.svg"
                    : "/contacts-icon.svg"
                }
              />
            </IconButton>
            <IconButton
              onClick={() => handleLanguage()}
              sx={{
                position: "relative",
                aspectRatio: "1/1",
                padding: "0",
                width: "90%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "30%",
                  outline: "solid 2px",
                  outlineColor: "primary.main",
                  transform: "rotate(45deg)",
                  backgroundColor: "transparent",
                  transition: "background-color 0.5s ease",
                  zIndex: 0,
                },
                "&:hover::before": {
                  backgroundColor: "background.paper",
                },
              }}
            >
              <Typography
                fontSize={{
                  md: "clamp(0px, min(2vw, 4vh), 16px)",
                  lg: "clamp(0px, min(0.85vw, 1.7vh), 16px)",
                }}
                zIndex={1}
              >
                {pathname.includes("/en") ? "UA" : "EN"}
              </Typography>
            </IconButton>
          </Stack>
        </Box>
      </Stack>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          border: "none",
          width: "1px",
          background: `linear-gradient(
            to bottom,
            var(--bg-main) 0%,
          #3D3A44 10%,
          #3D3A44 90%,
            var(--bg-main) 100%
          )`,
        }}
      />
    </Box>
  );
}
