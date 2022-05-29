export const digitalRoot = (n:number):number => {
  if(n < 10) {
    return n;
  }

  let s = n.toString().split('').map(e => Number.parseInt(e));
  let v = s.reduce((prev, curr) => prev + curr, 0);
  return digitalRoot(v);
}