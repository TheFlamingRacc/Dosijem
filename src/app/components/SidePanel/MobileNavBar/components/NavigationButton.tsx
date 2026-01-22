"use client";

import { Typography, Box, Stack } from "@mui/material";
import { usePathname, useRouter, useParams } from "next/navigation";

const colorMap = {
  servers: "#D9937A",
  plugins: "#D99592",
  design: "#EADDD4",
  building: "#E1AAA2",
  sites: "#B18C72",
  mods: "primary.main",
  skins: "#B6865E",
};

const textMap = {
  uk: {
    servers: "СЕРВЕРА",
    plugins: "ПЛАГІНИ",
    design: "ДИЗАЙН",
    building: "БІЛДИНГ",
    sites: "САЙТИ",
    mods: "МОДИ",
    skins: "СКІНИ",
  },
  en: {
    servers: "SERVERS",
    plugins: "PLUGINS",
    design: "DESIGNS",
    building: "BUILDING",
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
    | "building"
    | "sites"
    | "mods"
    | "skins";
};

export default function NavigationButton({ location }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const { lang } = useParams();
  const language = lang && lang !== "undefined" ? lang : "uk";

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
        fontFamily="e-UkraineHead"
        fontSize={12}
        fontWeight={500}
        onClick={() => router.push(`/${language}/sevices/${location}`)}
      >
        {textMap[lang as "uk" | "en"][location]}
      </Typography>
    </Stack>
  );
}
