export const pigIt = (a : string) : string => {
  return a.split(' ').map(word => {
    if(/\w/.test(word)) {
      let newWord = word.slice(1);
      return `${newWord}${word[0]}ay`
    } else {
      return word;
    }
  }).join(' ');
}