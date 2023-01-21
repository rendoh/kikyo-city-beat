export function lerp(x: number, y: number, p: number): number {
  return x + (y - x) * p;
}
