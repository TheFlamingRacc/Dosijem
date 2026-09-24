"use client";

import { useEffect, useState } from "react";

// Shared flag: true while the page transition curtain covers the content.
// Entrance animations of a page mounted under the curtain wait until it's released.
let held = false;
const listeners = new Set<() => void>();

export function setContentHeld(value: boolean) {
  if (held === value) return;
  held = value;
  listeners.forEach((listener) => listener());
}

export function isContentHeld() {
  return held;
}

// False only for components mounted under the curtain, until it is halfway gone.
// Components that were already on screen stay true, so they never re-animate.
export function usePageRevealed() {
  const [revealed, setRevealed] = useState(() => !held);

  useEffect(() => {
    if (revealed) return;
    const check = () => {
      if (!held) setRevealed(true);
    };
    listeners.add(check);
    check();
    return () => {
      listeners.delete(check);
    };
  }, [revealed]);

  return revealed;
}
