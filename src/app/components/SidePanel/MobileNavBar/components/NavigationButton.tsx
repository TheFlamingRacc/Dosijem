"use client";

import { Typography, Box, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const colorMap = {
  servers: "#D9937A",
  plugins: "#D99592",
  design: "#EADDD4",
  buildings: "#E1AAA2",
  sites: "#B18C72",
  mods: "primary.main",
  skins: "#B6865E",
};

const textMap = {
  ua: {
    servers: "СЕРВЕРА",
    plugins: "ПЛАГІНИ",
    design: "ДИЗАЙН",
    buildings: "БІЛДИНГ",
    sites: "САЙТИ",
    mods: "МОДИ",
    skins: "СКІНИ",
  },
  en: {
    servers: "SERVERS",
    plugins: "PLUGINS",
    design: "DESIGNS",
    buildings: "BUILDING",
    sites: "WEBSITES",
    mods: "MODS",
    skins: "SKINS",
  },
};

type Props = {
  location:
    | "servers"
    | "plugins"
    | "design"
    | "buildings"
    | "sites"
    | "mods"
    | "skins";
};

export default function NavigationButton({ location }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname.includes("/en") ? "en" : "ua";
  const isCurrentLocation = pathname.includes(`/${location}`);

  return (
    <Stack
      direction="row"
      spacing={2.2}
      alignItems="center"
      sx={{ cursor: "pointer", userSelect: "none" }}
    >
      <Box
        width={15}
        height={15}
        borderRadius={"4px"}
        sx={{
          transform: "rotate(45deg)",
          backgroundColor: colorMap[location],
        }}
      />
      <Typography
        color={isCurrentLocation ? "white" : "#D0CBDD"}
        fontFamily={"e-UkraineHead"}
        fontSize={12}
        fontWeight={isCurrentLocation ? 550 : 500}
        onClick={() => router.push(`/${location}${lang === "en" ? "/en" : ""}`)}
      >
        {textMap[lang][location]}
      </Typography>
    </Stack>
  );
}
