export const code = (s: string): string => {
  if(s.trim() == "") return "";

  let square_len = Math.ceil(Math.sqrt(s.length));
  let square = [...Array(square_len)].map(_ => Array(square_len).fill("\v"));

  for(let i = 0; i < square_len ** 2; i++) {
    let r = Math.floor(i / square_len);
    let c = i % square_len;
    let str_idx = c + r * square_len;
    if(str_idx < s.length) {
      square[r][c] = s.substring(str_idx, str_idx + 1);
    }
  }

  let rotated = rotateCW(square);
  return rotated.map(w => w.join('')).join('\n');
}

export const decode = (s: string): string => {
  if(s.trim() == "") return "";
  s = s.replace('\x0B', ' ');
  let a = rotateCCW(s.split("\n"));
  a[a.length - 1] = a[a.length - 1].map(e => e == '\x0B' ? '' : e);
  return a.map(w => w.join('')).join('').trim();
} 

function rotateCW(arr: any) {
  let newarr = [];
  let row_len = arr.length;
  let col_len = arr[0].length;

  for(let i = 0; i < col_len; i++) {
    let temp = [];

    for(let j = row_len - 1; j >= 0; j--) {
      temp.push(arr[j][i])
    }

    newarr.push(temp);
  }

  return newarr;
}

function rotateCCW(arr: any) {
  let newarr = [];
  let row_len = arr.length;
  let col_len = arr[0].length;

  for(let i = col_len - 1; i >= 0; i--) {
    let temp = [];

    for(let j = 0; j < row_len; j++) {
      temp.push(arr[j][i]);
    }

    newarr.push(temp);
  }

  return newarr;
}