export function josephusSurvivor(n: number, k: number) {
  let people = [...Array(n)].map((_,i) => i + 1);
  let idx = 0;

  while(people.length > 1) {
    // idx += k - 1;
    // if(idx > people.length - 1) {
    //   idx %= people.length;
    // }
    idx = (idx + k - 1) % people.length;
    people.splice(idx, 1);
  }

  return people[0];
}