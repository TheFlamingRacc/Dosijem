"use client";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import MainNavigationBlock from "./components/MainNavigationBlock";
import AdditionalNavigationBlock from "./components/AdditionalNavigationBlock";

const routeColorMap: Record<string, string> = {
  servers: "#D9937A",
  plugins: "#D99592",
  design: "#EADDD4",
  building: "#E1AAA2",
  sites: "#B18C72",
  mods: "primary.main",
  skins: "#B6865E",
};

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const { lang } = useParams();

  const handleLanguage = () => {
    const parts = pathname.split("/").filter(Boolean);
    const currentLang = parts[0];

    const nextLang = currentLang === "en" ? "uk" : "en";

    parts[0] = nextLang;

    router.push("/" + parts.join("/"));
  };

  const parts = pathname.split("/").filter(Boolean);

  const section = parts[2]; // [lang]/services/[target]

  const specialElementsColor = routeColorMap[section] ?? "primary.main";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <Stack
        position="sticky"
        spacing={2}
        display={{ xs: "flex", md: "none" }}
        zIndex={1000}
        top={20}
        width="100%"
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
            <Box
              onClick={() => router.push(`/${lang}/home`)}
              component="img"
              src="/DOSIJEM.svg"
              height="13px"
              sx={{ cursor: "pointer" }}
            />
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
              onClick={() => router.push(`/${lang}/contacts`)}
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
      <Box
        position="fixed"
        height={60}
        width="100%"
        top={0}
        left={0}
        zIndex={998}
        display={{ xs: "block", md: "none" }}
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.15)",
        }}
      />
    </>
  );
}
