export class Kata {
  static squareDigits(num: number): number {
    return +(num.toString().split('').map(n => Math.pow(+n, 2)).join(''));
  }
}