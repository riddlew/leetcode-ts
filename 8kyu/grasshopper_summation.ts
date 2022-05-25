export const summation = (num:number): number => { 
  if(num === 1) return 1;
  return num + summation(num-1);
}