import { Box, BoxProps } from "@mui/material";

type Props = BoxProps & {
  rate: 1 | 2 | 3 | 4 | 5;
};

const colorPalette = ["#9863E7", "#A16DE6", "#AA77E5", "#B381E4", "#C08BE3"];

export default function Rate({ rate, ...props }: Props) {
  return (
    <Box display="flex" height={10} gap={1} {...props}>
      {Array.from({ length: rate }).map((_, i) => (
        <Box
          key={i}
          height={10}
          width={10}
          borderRadius="50%"
          sx={{
            backgroundColor: colorPalette[i],
            opacity: 0,
            transform: "translateX(5px)",
            animation: "DotIn 1s ease forwards",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </Box>
  );
}
