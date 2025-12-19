"use client";

import { Stack } from "@mui/material";
import CustomIconButton from "./CustomIconButton";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
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
        isCurrentLocation={pathname.includes("/building")}
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
    </Stack>
  );
}
