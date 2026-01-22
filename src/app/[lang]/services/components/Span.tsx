import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  color: string;
};

export default function Span({ children, color }: Props) {
  return (
    <Typography
      component="span"
      fontSize="inherit"
      fontFamily="inherit"
      fontWeight="inherit"
      color={color}
    >
      {children}
    </Typography>
  );
}
