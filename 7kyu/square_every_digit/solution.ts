export class Kata {
  static squareDigits(num: number): number {
    let x = "";
    num.toString().split('').forEach(n => x += Math.pow(parseInt(n), 2));
    return parseInt(x);
  }
}