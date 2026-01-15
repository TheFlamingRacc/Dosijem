import { Stack, Typography, Box } from "@mui/material";

const centerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transformOrigin: "center",
  alignItems: "center",
  width: "150%",
  height: { xs: 37.5, md: 56.5, lg: 75 },
  m: 0,
  p: 1,
};

export default function Tapes() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent={"center"}
        zIndex={901}
        divider={
          <Box
            width={{ xs: "9px", md: "14px", lg: "18.5px" }}
            flexShrink={0}
            borderRadius="30%"
            sx={{
              aspectRatio: 1,
              backgroundColor: "#A970FD",
              transform: "rotate(45deg)",
              transformOrigin: "center",
            }}
          />
        }
        spacing={{ xs: 3, md: 4.5, lg: 6 }}
        sx={{
          ...centerStyle,
          backgroundColor: "primary.main",
          transform: "translate(-50%, -50%) rotate(2deg)",
        }}
      >
        {[
          "/servers-icon-t.svg",
          "/mods-icon-t.svg",
          "/design-icon-t.svg",
          "/skins-icon-t.svg",
          "/building-icon-t.svg",
          "/plugins-icon-t.svg",
          "/servers-icon-t.svg",
          "/mods-icon-t.svg",
          "/design-icon-t.svg",
          "/skins-icon-t.svg",
          "/building-icon-t.svg",
          "/plugins-icon-t.svg",
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
            height={{ xs: "1rem", md: "1.5rem", lg: "2rem" }}
            src={src}
            sx={{ aspectRatio: 1 }}
          />
        ))}
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        zIndex={900}
        divider={
          <Box
            flexShrink={0}
            width={{ xs: "9px", md: "14px", lg: "18.5px" }}
            borderRadius="30%"
            sx={{
              aspectRatio: 1,
              backgroundColor: "#7B50BC",
              transform: "rotate(45deg)",
              transformOrigin: "center",
            }}
          />
        }
        spacing={{ xs: 2, md: 3, lg: 4 }}
        sx={{
          ...centerStyle,
          backgroundColor: "#9863E7",
          transform: "translate(-50%, -50%) rotate(-2deg)",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
          <Typography
            key={i}
            fontSize={{ xs: "1rem", md: "1.5rem", lg: "2rem" }}
            color="#09021C"
            fontWeight={500}
          >
            DOSIJEM
          </Typography>
        ))}
      </Stack>
    </>
  );
}
