export default function add(x: number): any {
  let f = (n: number) => {
    return add(x + n);
  }

  f.valueOf = () => x;

  return f;
}