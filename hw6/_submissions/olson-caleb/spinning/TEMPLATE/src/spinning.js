export const spinWords = sentence => {
  let splitString = sentence.split(' ');

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length >= 5) {
      splitString[i] = splitString[i].split('').reverse().join('');
    }
  }

  return splitString.join(' ');
}

