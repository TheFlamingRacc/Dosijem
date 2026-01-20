import { Box, IconButton } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

export default function LogoButton() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <IconButton
      onClick={() =>
        router.push(`/home${pathname.includes("/en") ? "/en" : ""}`, {
          scroll: true,
        })
      }
      sx={{
        backgroundColor: "background.default",
        border: "solid 1px #3D3A44",
        transition: "0.3s ease box-shadow",
        "&:hover": {
          boxShadow: "0 0 0 rgba(0, 0, 0, 0.6), 0 0 20px #522FB2",
          backgroundColor: "background.default",
        },
      }}
    >
      <Box component="img" src="/dosijem-logo.svg" width="100%" height="100%" />
    </IconButton>
  );
}
