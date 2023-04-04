export function dblLinear(n: number): number {
  let res = [1];
  let p2 = 0;
  let p3 = 0;

  for(let i = 1; i <= n; i++) {
    let f2 = 2 * res[p2] + 1;
    let f3 = 3 * res[p3] + 1;
    res[i] = Math.min(f2, f3);
    if(res[i] == f2) p2++;
    if(res[i] == f3) p3++;
  }

  return res[n];
}