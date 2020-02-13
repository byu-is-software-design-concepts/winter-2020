export const scramble = (str1, str2) => {
  var legit = false
  for (var i=0; i < str2.length; i++) {
    var containsLetter = false
    for (var j=0; j < str1.length; j++) {
      if (str2.charAt(i) == str1.charAt(j)) {
        containsLetter = true
      }
    }
    if (containsLetter == false) {
      return legit
    }
  }
  legit = true
  return legit
}