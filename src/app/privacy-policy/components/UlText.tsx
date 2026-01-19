import { Typography, Box } from "@mui/material";
import { PropsWithChildren } from "react";
import Text from "./Text";

export default function UlText({ children }: PropsWithChildren) {
  return (
    <Typography display="flex" gap={1} alignItems="center" component="span">
      <Box
        height={{ xs: 7, md: 10 }}
        width={{ xs: 7, md: 10 }}
        borderRadius={50}
        flexShrink={0}
        sx={{ backgroundColor: "primary.main" }}
      />
      <Text>{children}</Text>
    </Typography>
  );
}
