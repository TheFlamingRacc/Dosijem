"use client";

import { Box, IconButton, Slider, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function MusicNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(
    Number(localStorage.getItem("volume")) || 30
  );
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguage = () => {
    const parts = pathname.split("/").filter(Boolean);
    const enIndex = parts.indexOf("en");

    if (enIndex !== -1) {
      parts.splice(enIndex, 1);
    } else {
      parts.push("en");
    }

    const newPath = "/" + parts.join("/");
    router.push(newPath);
  };

  const handleVolumeChange = (_: Event, value: number | number[]) => {
    const v = Array.isArray(value) ? value[0] : value;
    setVolume(v);
    localStorage.setItem("volume", String(v));
  };

  useEffect(() => {
    const audio = new Audio("/bg-music.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    const playAudio = async () => {
      try {
        await audio.play();
        setTimeout(() => {
          audio.volume = volume / 100;
        }, 1000);
      } catch (err) {
        console.warn("Автоматичне відтворення заблоковано:", err);
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <Slider
        value={volume}
        onChange={(e, value) => {
          handleVolumeChange(e, value as number);
        }}
        orientation="vertical"
        sx={{
          width: "min(0.4vw, 0.8vh)",
          my: "0.5vw",
          height: { md: "min(12vw, 8vh)", lg: "min(3.5vw, 7vh)" },
          transition: "ease 0.5s opacity",
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
      />
      <Box
        borderRadius={"100vw"}
        sx={{ backgroundColor: "background.default" }}
        mx={"auto"}
        width={"85%"}
        height={"auto"}
        display={"flex"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        p={"min(0.5vw, 1vh)"}
        gap={"min(0.5vw, 1vh)"}
      >
        <IconButton
          sx={{ aspectRatio: "1/1", padding: "0", width: "90%" }}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <Box
            width={"60%"}
            sx={{ aspectRatio: "1" }}
            component={"img"}
            src={isVisible ? "/volume-icon-t.svg" : "/volume-icon.svg"}
          />
        </IconButton>
        <IconButton
          sx={{ aspectRatio: "1/1", padding: "0", width: "90%" }}
          onClick={() =>
            router.push(`/contacts${pathname.includes("/en") ? "/en" : ""}`)
          }
        >
          <Box
            height={"60%"}
            sx={{ aspectRatio: "1" }}
            component={"img"}
            src={
              pathname.includes("/contacts")
                ? "/contacts-icon-t.svg"
                : "/contacts-icon.svg"
            }
          />
        </IconButton>
        <IconButton
          onClick={() => handleLanguage()}
          sx={{
            position: "relative",
            aspectRatio: "1/1",
            padding: "0",
            width: "90%",
            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "30%",
              outline: "solid 2px",
              outlineColor: "primary.main",
              transform: "rotate(45deg)",
              backgroundColor: "transparent",
              transition: "background-color 0.5s ease",
              zIndex: 0,
            },
            "&:hover::before": {
              backgroundColor: "background.paper",
            },
          }}
        >
          <Typography
            fontSize={{
              md: "clamp(0px, min(2vw, 4vh), 16px)",
              lg: "clamp(0px, min(0.85vw, 1.7vh), 16px)",
            }}
            zIndex={1}
          >
            {pathname.includes("/en") ? "UA" : "EN"}
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
}
