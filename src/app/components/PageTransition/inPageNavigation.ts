// Lets a mounted page handle some internal links itself instead of the curtain
// transition (the desktop home ↔ about stage animates between its halves).
type Handler = (pathname: string) => boolean;

let handler: Handler | null = null;

export function setInPageNavigation(next: Handler | null) {
  handler = next;
}

/** Returns true when the current page took over the navigation to `pathname`. */
export function tryInPageNavigation(pathname: string) {
  return handler?.(pathname) ?? false;
}
