export const spinWords = sentence => {
  let words = sentence.trim().split(' ');

  const spunWords = words.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  });

  return spunWords.join(' ');
};
