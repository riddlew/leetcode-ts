export function accum(s: string): string {
  let split = s.split('').map((val, i) => val.toUpperCase() + val.toLowerCase().repeat(i));
  return split.join('-');
}