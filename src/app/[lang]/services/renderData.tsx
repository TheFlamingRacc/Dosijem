import { JSX, PropsWithChildren } from "react";

export function renderWithAccent(
  parts: string[],
  Accent: ({ children }: PropsWithChildren) => JSX.Element,
  even: boolean = true,
) {
  return parts.map((part, i) =>
    (even ? i % 2 === 1 : i % 2 === 0) ? <Accent key={i}>{part}</Accent> : part,
  );
}
