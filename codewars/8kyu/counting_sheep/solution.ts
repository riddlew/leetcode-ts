export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.reduce((prev, cur) => cur === true ? prev + 1 : prev, 0);
}
