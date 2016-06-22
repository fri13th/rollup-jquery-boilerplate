export function view(who, array) {
  return `
Hello, ${who}!
${array.map(no => `${no}`).join('')}
`;
}
