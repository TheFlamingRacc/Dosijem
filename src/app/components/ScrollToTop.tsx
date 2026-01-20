"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const el = document.getElementById("app-scroll");
    el?.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}
