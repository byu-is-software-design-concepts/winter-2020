export const spinWords = sentence => {
  let string;
  string = sentence.split(' ');

  for (let i = 0; i < string.length; i++) {
    if (string[i].length > 4) {
      string[i] = string[i].split('').reverse().join('');
    }
  }

  return string.join(' ');
}
