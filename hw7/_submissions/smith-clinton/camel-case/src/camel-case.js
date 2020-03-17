export const convertToCamelCase = str => {
  var wordlist = str.toLowerCase().split(" ");
  let result = ""
  for (var i = 0; i < wordlist.length; i++) {
    if ( i == 0) {
      result += wordlist[i]
    }
    else {
      result += wordlist[i][0].toUpperCase()
      result += wordlist[i].slice(1,wordlist[i].length)
    }
  }
  return result
}
