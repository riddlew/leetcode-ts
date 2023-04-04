export function spinWords(words: string): string {
  let split = words.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word);
  return split.join(' ');
}