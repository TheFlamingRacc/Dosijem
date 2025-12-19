import { Stack, Box, Typography } from "@mui/material";
import NavigationButton from "./NavigationButton";

const locations: [
  "servers",
  "plugins",
  "design",
  "buildings",
  "sites",
  "mods",
  "skins"
] = ["servers", "plugins", "design", "buildings", "sites", "mods", "skins"];

export default function MainNavigationBlock() {
  return (
    <Stack
      borderRadius="23px"
      width="100%"
      p={2.7}
      sx={{ backgroundColor: "background.default", userSelect: "none" }}
      spacing={2}
      overflow="hidden"
      position="relative"
    >
      {locations.map((location, i) => (
        <NavigationButton key={i} location={location} />
      ))}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"center"}
        zIndex={1002}
        width="500px"
        height={30}
        m={0}
        p={1}
        position="absolute"
        top={"38%"}
        right="-185px"
        divider={
          <Box
            width="8px"
            borderRadius="30%"
            sx={{
              aspectRatio: 1,
              backgroundColor: "#A970FD",
              transform: "rotate(45deg)",
              transformOrigin: "center",
            }}
          />
        }
        spacing={1.9}
        sx={{
          backgroundColor: "primary.main",
          transform: "rotate(100deg)",
        }}
      >
        {[
          "/servers-icon-t.svg",
          "/mods-icon-t.svg",
          "/design-icon-t.svg",
          "/skins-icon-t.svg",
          "/building-icon-t.svg",
          "/plugins-icon-t.svg",
        ].map((src, i) => (
          <Box
            component="img"
            key={i}
            src={src}
            sx={{ height: "1rem", aspectRatio: 1 }}
          />
        ))}
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        width="500px"
        height={30}
        m={0}
        p={1}
        zIndex={1001}
        position="absolute"
        top="38%"
        right="-185px"
        divider={
          <Box
            width="8px"
            borderRadius="30%"
            sx={{
              aspectRatio: 1,
              backgroundColor: "#7B50BC",
              transform: "rotate(45deg)",
              transformOrigin: "center",
            }}
          />
        }
        spacing={1.9}
        sx={{
          backgroundColor: "#9863E7",
          transform: "rotate(92deg)",
        }}
      >
        {[1, 2, 3].map((e, i) => (
          <Typography
            key={i}
            fontWeight={500}
            fontSize={"1rem"}
            color="#09021C"
          >
            DOSIJEM
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}
