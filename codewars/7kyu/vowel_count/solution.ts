export class Kata {
  static getCount(str: string): number {
    let count = str.match(/[aeiou]/gi);
    return (count ? count.length : 0);
  }
}