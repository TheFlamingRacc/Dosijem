"use client";

import { Box, Stack, Typography, IconButton, StackProps } from "@mui/material";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import MainNavigationBlock from "./components/MainNavigationBlock";
import AdditionalNavigationBlock from "./components/AdditionalNavigationBlock";

type Props = StackProps & {
  colors:
    | "default"
    | "plugins"
    | "design"
    | "skins"
    | "buildings"
    | "servers"
    | "websites";
};
export default function MobileNavBar({ colors, ...props }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const colorMap = {
    default: "primary.main",
    plugins: "#D99592",
    design: "#EADDD4",
    skins: "#B6865E",
    buildings: "#E1AAA2",
    servers: "#D9937A",
    websites: "#E1AAA2",
  };

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

  const specialElementsColor = colorMap[colors];

  return (
    <>
      <Stack
        position="sticky"
        spacing={2}
        display={{ xs: "flex", md: "none" }}
        zIndex={1000}
        top={20}
        width="100%"
        {...props}
      >
        <Box
          width="100%"
          height={40}
          display={{ xs: "flex", md: "none" }}
          justifyContent="space-between"
          alignItems="center"
          px={1.3}
          py={1.3}
          borderRadius={99}
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Box display="flex" gap={1.5} alignItems="center">
            <Box component="img" src="/DOSIJEM.svg" height="13px" />
            <Box
              width={17}
              position="relative"
              height={7}
              sx={{ cursor: "pointer" }}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <Box
                position="absolute"
                width={17}
                height={2}
                borderRadius={1}
                top={isOpen ? "50%" : 0}
                sx={{
                  backgroundColor: specialElementsColor,
                  transition: "all 0.35s ease",
                  transform: isOpen
                    ? "translateY(-50%) rotate(45deg)"
                    : "translateY(0) rotate(0)",
                }}
              />

              <Box
                position="absolute"
                width={17}
                height={2}
                borderRadius={1}
                bottom={isOpen ? "auto" : 0}
                top={isOpen ? "50%" : "100%"}
                sx={{
                  backgroundColor: specialElementsColor,
                  transition: "all 0.35s ease",
                  transform: isOpen
                    ? "translateY(-50%) rotate(-45deg)"
                    : "translateY(0) rotate(0)",
                }}
              />
            </Box>
          </Box>
          <Box gap={1.5} display="flex" alignItems="center">
            <IconButton
              sx={{ aspectRatio: "1/1", padding: "0", width: "auto" }}
              onClick={() =>
                router.push(`/contacts${pathname.includes("/en") ? "/en" : ""}`)
              }
            >
              <Box
                height="100%"
                sx={{ aspectRatio: "1" }}
                component={"img"}
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
                width: "20px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "30%",
                  outline: "solid 1px",
                  outlineColor: specialElementsColor,
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
              <Typography fontSize="8px" zIndex={1}>
                {pathname.includes("/en") ? "UA" : "EN"}
              </Typography>
            </IconButton>
          </Box>
        </Box>

        {isOpen && (
          <Stack
            overflow="hidden"
            position="absolute"
            top="100%"
            width="100%"
            zIndex={1000}
            spacing={2}
          >
            <MainNavigationBlock />
            <AdditionalNavigationBlock />
          </Stack>
        )}
      </Stack>

      <Box
        display={{ xs: "block", md: "none" }}
        onClick={() => setIsOpen(false)}
        className={isOpen ? "fadeIn" : "fadeOut"}
        position="fixed"
        zIndex={999}
        sx={{
          inset: 0,
          pointerEvents: !isOpen ? "none" : "all",
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.15)",
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}
