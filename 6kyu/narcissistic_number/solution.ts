export function narcissistic(value: number): boolean {
  // let valstr = (''+value);
  // let result = valstr
  // .map(n => Math.pow(parseInt(n), valstr.length))
  // .reduce((prev, curr) => prev + curr);

  let result = (''+value)
    .split('')
    .reduce((prev, curr, _, arr) => prev + parseInt(curr) ** arr.length, 0)
  return result === value;
}
