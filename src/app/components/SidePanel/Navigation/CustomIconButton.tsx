"use client";

import { IconButton, Box, Typography } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

const variantsData = {
  plugins: {
    img: "./plugins-icon",
    title: "Плагіни",
    titleEn: "Plugins",
    url: "/plugins",
  },
  mods: {
    img: "./mods-icon",
    title: "Моди",
    titleEn: "Mods",
    url: "/mods",
  },
  design: {
    img: "./design-icon",
    title: "Дизайн",
    titleEn: "Design",
    url: "/design",
  },
  skins: {
    img: "./skins-icon",
    title: "Скіни",
    titleEn: "Skins",
    url: "/skins",
  },
  building: {
    img: "./building-icon",
    title: "Білдинг",
    titleEn: "Building",
    url: "/building",
  },
  servers: {
    img: "./servers-icon",
    title: "Сервери",
    titleEn: "Servers",
    url: "/servers",
  },
  sites: {
    img: "./sites-icon",
    title: "Сайти",
    titleEn: "Websites",
    url: "/sites",
  },
};

type Variant = keyof typeof variantsData;

type Props = {
  variant: Variant;
};

export default function CustomIconButton({ variant }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const isEn = pathname.includes("/en");

  const iconData = variantsData[variant];

  const isCurrentLocation = pathname.includes(iconData.url);

  return (
    <IconButton
      onClick={() => router.push(`${iconData.url}${isEn ? "/en" : ""}`)}
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
          transform: "rotate(45deg)",
          backgroundColor: isCurrentLocation ? "primary.main" : "transparent",
          transition: "background-color 0.5s ease",
          zIndex: 0,
        },
        "&:hover::before": {
          backgroundColor: isCurrentLocation ? "" : "background.paper",
        },
        "&:hover .hoverBlock": {
          opacity: isCurrentLocation ? 0 : 1,
        },
      }}
    >
      <Box
        zIndex={1}
        width="60%"
        sx={{ aspectRatio: 1 }}
        component="img"
        src={`${iconData.img}${isCurrentLocation ? "-t" : ""}.svg`}
      />
      {/* <Box
        className="hoverBlock"
        position="absolute"
        left="min(2.5vw, 5vh)"
        display="flex"
        alignItems="center"
        sx={{
          zIndex: 1000,
          pointerEvents: "none",
          opacity: 0,
          transition: "0.5s ease opacity",
        }}
      >
        <Box
          mx="clamp(0px, min(1.5vw, 3vh), 12px)"
          sx={{
            height: "3px",
            width: "clamp(0px, min(1.5vw, 2vh), 14px)",
            borderRadius: "200px",
            backgroundColor: "primary.main",
            zIndex: 4,
          }}
        />
        <Typography
          color="#D2D2D2"
          fontSize="clamp(0px, min(2vw, 3vh), 24px)"
          sx={{
            position: "relative",
            display: "inline-block",
            zIndex: 3,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: "-1rem",
              backgroundColor: "var(--bg-main)",
              filter: "blur(15px)",
              opacity: 1,
              zIndex: -1,
            },
          }}
        >
          {isEn ? iconData.titleEn : iconData.title}
        </Typography>
      </Box> */}
    </IconButton>
  );
}
