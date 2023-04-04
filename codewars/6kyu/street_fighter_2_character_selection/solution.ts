export function streetFighterSelection(fighters: Array<string[]>, position: number[], moves: string[]) {
  let results = [];
  let [x, y] = position;
  let xLen = fighters[0].length - 1;

  moves.forEach(move => {
    switch(move) {
        case "up":
          y = 0;
          break;
        case "down":
          y = 1;
          break;
        case "left":
          x = x === 0 ? xLen : --x;
          break;
        case "right":
          x = x === xLen ? 0 : ++x;
          break;
    }
    results.push(fighters[y][x]);
  });

  return results;
}
