export const spinWords = sentence => {
  let words_arr = sentence.split(" ")
  let new_sentence = ""
  for(let j = 0; j < words_arr.length; j++){//Check each word in the sentence
    //This is the code to determine if and how to split the word.
    if(words_arr[j].length >= 5){//if the word length is greater than 5, spin the word
      for(let i = 0; i < words_arr[j].length; i++){//Run through each letter backwards and add the last letter to the new_sentence.
        new_sentence += words_arr[j].charAt(words_arr[j].length - 1 - i)
      }
    }
    else{//if the word length is not greater than 5, just add the word.
      new_sentence += words_arr[j]
    }
    if(j < (words_arr.length - 1)){//As long as this is not the last word, add a space after.
      new_sentence += " "
    }
  }
  
  

  return new_sentence
}

/*
Write a function `spinWords(sentence)` that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

- For example:
  - `"Stopping Spinning My Words"` should return `"Stop gninnipS My sdroW"`
*/