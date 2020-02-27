export const spinWords = sentence => {
  let str = sentence.split(' ');

  for (let i = 0; i < str.length; i++) {
    if (str[i].length >= 5) {
      str[i] = str[i].split('').reverse().join('');
    }
  }

  return str.join(' ');
}
