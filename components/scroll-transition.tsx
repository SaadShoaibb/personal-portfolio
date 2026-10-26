/**
 * Previously applied a live CSS grayscale filter on the entire page during scroll.
 * That forces a full-layer repaint every frame and was a major source of lag.
 * Kept as a pass-through wrapper so call sites stay stable.
 */
export function ScrollTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
