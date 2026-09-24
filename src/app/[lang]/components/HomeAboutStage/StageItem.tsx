import { Box, BoxProps } from "@mui/material";

type Props = BoxProps & {
  /** Point of the home → about progress (0..1) where this element starts moving. */
  at: number;
  /** Part of the progress the move takes; smaller = faster. */
  dur: number;
  /** Distance in container widths. */
  dist?: number;
  /** Covers the positioned parent — for wrapping absolutely positioned decor. */
  overlay?: boolean;
};

// Wrapper moved by the desktop home ↔ about horizontal stage (see Stage.tsx).
// The wrapper is animated, not the child, because children have their own
// CSS entrance animations on `transform` that would override the motion.
export default function StageItem({
  at,
  dur,
  dist = 1,
  overlay = false,
  children,
  sx,
  ...props
}: Props) {
  return (
    <Box
      data-stage-item=""
      data-stage-at={at}
      data-stage-dur={dur}
      data-stage-dist={dist}
      sx={[
        overlay && {
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Box>
  );
}
