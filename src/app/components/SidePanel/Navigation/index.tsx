"use client";

import { Box } from "@mui/material";
import CustomIconButton from "./CustomIconButton";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <Box
      borderRadius={"100vw"}
      sx={{ backgroundColor: "background.default" }}
      mx={"auto"}
      width={"75%"}
      height={"auto"}
      display={"flex"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      p={"min(0.5vw, 1vh)"}
      gap={"min(0.5vw, 1vh)"}
    >
      <CustomIconButton
        isCurrentLocation={pathname.includes("/plugins")}
        src="/plugins-icon.svg"
        targetSrc="/plugins-icon-t.svg"
        title="Плагіни"
        redirectUrl="/plugins"
      />
      <CustomIconButton
        isCurrentLocation={pathname.includes("/mods")}
        src="/mods-icon.svg"
        targetSrc="/mods-icon-t.svg"
        title="Моди"
        redirectUrl="/mods"
      />
      <CustomIconButton
        isCurrentLocation={pathname.includes("/design")}
        src="/design-icon.svg"
        targetSrc="/design-icon-t.svg"
        title="Дизайн"
        redirectUrl="/design"
      />
      <CustomIconButton
        isCurrentLocation={pathname.includes("/skins")}
        src="/skins-icon.svg"
        targetSrc="/skins-icon-t.svg"
        title="Скіни"
        redirectUrl="/skins"
      />
      <CustomIconButton
        isCurrentLocation={pathname.includes("/bulding")}
        src="/building-icon.svg"
        targetSrc="/building-icon-t.svg"
        title="Білдинг"
        redirectUrl="/building"
      />
      <CustomIconButton
        isCurrentLocation={pathname.includes("/servers")}
        src="/servers-icon.svg"
        targetSrc="/servers-icon-t.svg"
        title="Сервера"
        redirectUrl="/servers"
      />
      <CustomIconButton
        isCurrentLocation={pathname.includes("/sites")}
        src="/sites-icon.svg"
        targetSrc="/sites-icon-t.svg"
        title="Сайти"
        redirectUrl="/sites"
      />
    </Box>
  );
}
