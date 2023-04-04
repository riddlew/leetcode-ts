export function SeriesSum(n:number):string
{
  if(n === 0) return n.toFixed(2);
  
  let total = 1;
  
  while(n > 1) {
    let val = 1 / ((n - 1) * 3 + 1)
    total += val;
    n--;
  }
  
  return total.toFixed(2);
}