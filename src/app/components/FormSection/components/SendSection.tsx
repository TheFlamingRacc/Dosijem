"use client";

import { Stack, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  onSubmit: any;
};

export default function SendSection({ onSubmit }: Props) {
  const pathname = usePathname();
  const isEnglish = pathname.includes("/en");
  const [toggled, setToggled] = useState(false);
  const router = useRouter();
  return (
    <Box display="flex" flex={1} gap={1} pt="35px">
      <Stack spacing={2.8}>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.6s",
          }}
        >
          <Typography fontSize="0.75rem" color="#C2C2C2">
            {isEnglish
              ? "I aknowledge that I have read the "
              : "Я засвідчую, що ознайомлений(-а) з "}
            <Typography
              fontSize="inherit"
              component={"span"}
              color="primary.dark"
              onClick={() =>
                router.push(`/privacy-policy${isEnglish ? "/en" : ""}`)
              }
              sx={{ cursor: "pointer" }}
            >
              {isEnglish ? "Privacy Policy" : "Політикою конфіденційності"}
            </Typography>
            {isEnglish
              ? ", and I give my full voluntary consent to the processing of my personal data in accordance with the procedure, purpose, and duration defined in the Policy."
              : ", та підтверджую свою повну добровільну згоду на обробку моїх персональних даних у порядку, згідно з метою та протягом періоду, що визначені в Політиці."}
          </Typography>
          <Box
            mx={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="5px"
            onClick={() => setToggled((prev) => !prev)}
            sx={{
              height: "17px",
              aspectRatio: 1,
              border: "solid 2px",
              borderColor: "primary.main",
              transform: "rotate(45deg)",
              cursor: "pointer",
            }}
          >
            {toggled && (
              <Box
                height="9.4px"
                sx={{
                  aspectRatio: 1,
                  borderRadius: "2px",
                  backgroundColor: "primary.main",
                }}
              />
            )}
          </Box>
        </Box>
        <Button
          onClick={() => onSubmit()}
          fullWidth
          disabled={!toggled}
          color="primary"
          variant="contained"
          sx={{
            borderRadius: "50px",
            py: 1,
            fontWeight: 500,
            fontSize: "1.25rem",
            color: "#09021C",
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.8s",
            "&.Mui-disabled": {
              backgroundColor: "#2A243A",
              color: "#49474F",
            },
          }}
        >
          {isEnglish ? "Send" : "Надіслати"}
        </Button>
      </Stack>
    </Box>
  );
}
