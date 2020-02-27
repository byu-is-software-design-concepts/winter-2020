export const convertToCamelCase = str => {
  return str.toLowerCase().trim().split(/[.\-_\s]/g).reduce((str, word) => str + word[0].toUpperCase() + word.slice(1));
}
