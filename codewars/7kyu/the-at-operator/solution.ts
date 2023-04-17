// This Kata angers me. ~~ does not handle negative numbers the same way
// as floor does (it'll just drop the decimal instead of round down), so
// this kata is completely flawed since Math.floor returns a completely
// different answer than the ~~ they want you to use.

export function evaluate(equation: string): number | null {
  const nums = equation.split('@').map(v => +v);
  const calc = (lh: number, rh: number) => (lh + rh) + (lh - rh) + (lh * rh) + ~~(lh / rh);

  while (nums.length > 1) {
    const lh = nums.shift() || 0,
          rh = nums.shift() || 0;
    let total = 0;

    if (rh === 0) return null;

    total += calc(lh, rh);
    nums.unshift(total);
  }

  return nums[0];
}