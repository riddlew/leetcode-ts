export function camelCase(str: string): string {
  return str
    .split(' ')
    .map(w => w ? w[0].toUpperCase() + w.slice(1) : '')
    .join('');
}