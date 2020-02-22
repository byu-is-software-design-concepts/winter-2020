export const spinWords = sentence => {
  const regex = /[A-Za-z]+/g;
  const words = sentence.match(regex);
  var newsentence = ""
  words.forEach(function(word){
    if(word.length > 4) {
        var newString = "";
        for (var i = word.length - 1; i >= 0; i--) {
          newString += word[i];
      } 
      word = newString;
    }
    newsentence+=word + " "
  })
console.log(newsentence)
return newsentence.slice(0, -1);;
}
