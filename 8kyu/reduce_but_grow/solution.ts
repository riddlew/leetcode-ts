export function grow(arr: number[]): number {
  return arr.reduce((prev, curr) =>  curr * prev);
}