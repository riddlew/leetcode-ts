export function persistence(num: number): number {
  let i = 0;
  while(num > 9) {
    num = num.toString().split('').reduce((p,c) => p * +c, 1);
    i++;
  }
  return i;
}
