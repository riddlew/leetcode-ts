export function validBraces(braces: string): boolean {
  let bracesArr = braces.split("")
  let bracesChecked: string[] = [];
  let opening = ['(', '{', '['];
  let closing = [')', '}', ']'];
  
  if(bracesArr.length % 2 !== 0 || bracesArr.length < 2) return false;
  
  for(let brace of bracesArr) {
    if(opening.includes(brace)) {
      bracesChecked.push(brace);
    } else if(closing.includes(brace)) {
      let last = bracesChecked.pop();
      let idx = closing.indexOf(brace);

      if(last !== opening[idx]) {
        return false;
      }
    } else {
      return false;
    }
  }
  
  return bracesChecked.length === 0;
}