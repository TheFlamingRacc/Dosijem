import Marquee from "./Marquee";
import { Box, Typography } from "@mui/material";

type Props = {
  color: string;
  text: string;
};

export default function StyledMarquee({ color, text }: Props) {
  return (
    <Marquee gap={30}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
        <Box key={v} display="flex" alignItems="center" gap="30px">
          <Box
            height="20px"
            m={0}
            borderRadius="7px"
            sx={{
              aspectRatio: 1,
              backgroundColor: color,
              transform: "rotate(45deg)",
            }}
          />
          <Typography fontSize="1.625rem" fontWeight={700}>
            {text}
          </Typography>
        </Box>
      ))}
    </Marquee>
  );
}
