export const spinWords = sentence => {
  let sString = sentence.split(' ');

  for (let i = 0; i < sString.length; i++) {
    if (sString[i].length >= 5) {
      sString[i] = sString[i].split('').reverse().join('');
    }
  }

  return sString.join(' ');
}