import { Stack } from "@mui/material";
import CustomIconButton from "./CustomIconButton";

export default function Navigation() {
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
      <CustomIconButton variant="plugins" />
      <CustomIconButton variant="mods" />
      <CustomIconButton variant="design" />
      <CustomIconButton variant="skins" />
      <CustomIconButton variant="building" />
      <CustomIconButton variant="servers" />
      <CustomIconButton variant="sites" />
    </Stack>
  );
}
