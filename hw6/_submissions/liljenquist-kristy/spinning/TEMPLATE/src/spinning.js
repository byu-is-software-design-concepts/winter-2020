export const spinWords = sentence => {
  // Write a function `spinWords(sentence)` that takes in a string of one or more words, and returns the same string, 
  //but with all five or more letter words reversed. 
  //Strings passed in will consist of only letters and spaces. 
  //Spaces will be included only when more than one word is present.

  var wordsArray = sentence.split(" ");
  var newSentence = "";
  var newWord = "";
  var wordCount = 0;

  //loop through the sentence
  for (const word in wordsArray) {
      const currentWord = wordsArray[word];
      if (currentWord.length >= 5) {
        //reverse the order of the letters in the word
        for (let i = 0; i < currentWord.length; i++) {
          newWord = currentWord[i] + newWord;
        }
      } else {
          newWord = currentWord;
      }
      if (wordCount == 0) {
        newSentence = newWord;
      } else {
        newSentence = newSentence + " " +  newWord;
      }
      newWord = "";
      wordCount++;
  }

  newSentence.trim();
  return newSentence
}

