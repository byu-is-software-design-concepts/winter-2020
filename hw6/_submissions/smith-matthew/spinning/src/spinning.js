export const spinWords = sentence => {
  let result = "";
  let splitSentence = sentence.split(" ");

  for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].length < 5) {
      if (result === "") {
        result += splitSentence[i];
      } else {
        result = result + " " + splitSentence[i]
      }
    } else {
      if (result === "") {
        result = reverseString(splitSentence[i]);
      } else {
        result = result + " " + reverseString(splitSentence[i]);
      }
    }
  }
  return result;
}

function reverseString(str) {
  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
}
