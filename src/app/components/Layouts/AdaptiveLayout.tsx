// import { PropsWithChildren } from "react";
// import { Box } from "@mui/material";
// import AuroraBackground from "../AuroraBackground";
// import SidePanel from "../SidePanel";

// export default function AdaptiveLayout({ children }: PropsWithChildren) {
//   return (
//     <Box
//       width="100%"
//       minHeight="100vh"
//       height={{ xs: "auto", md: "100vh" }}
//       position="relative"
//       alignItems={{ xs: "normal", lg: "center" }}
//       justifyContent={{ xs: "normal", lg: "center" }}
//     >
//       <Box
//         display={{ xs: "none", lg: "block" }}
//         overflow="hidden"
//         position="absolute"
//         width="100%"
//         height="100%"
//         zIndex={-1}
//       >
//         <AuroraBackground speed={0.5} />
//       </Box>
//       <Box
//         zIndex={1}
//         display="flex"
//         overflow="hidden"
//         sx={{
//           aspectRatio: { md: "auto", lg: "16 / 9" },
//           maxHeight: {
//             md: "none",
//             lg: "min(calc(100vh - 50px), 750px)",
//           },
//           maxWidth: {
//             md: "100%",
//             lg: "calc(100vw - 50px)",
//           },
//           borderRadius: { md: 0, lg: "2vw" },
//           backgroundColor: "var(--bg-main)",
//           outline: {
//             md: "none",
//             lg: "solid rgba(217, 217, 217, 0.2) 20px",
//           },
//         }}
//       >
//         <SidePanel />
//         <Box
//           width="100%"
//           sx={{
//             overflowY: "scroll",
//           }}
//         >
//           {children}
//         </Box>
//       </Box>
//     </Box>
//   );
// }
