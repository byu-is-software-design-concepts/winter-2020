export const spinWords = sentence => {
  let splitWords = sentence.split(' ');

  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length >= 5) {
      splitWords[i] = splitWords[i].split('');
      splitWords[i] = splitWords[i].reverse();
      splitWords[i] = splitWords[i].join('');
    }
  }
  return splitWords.join(' ');
}
