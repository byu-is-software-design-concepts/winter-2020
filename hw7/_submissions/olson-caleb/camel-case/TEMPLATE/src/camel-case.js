export const convertToCamelCase = str => {
  var words = str.toLowerCase().split(" ");
  let result = ""
  for (var i = 0; i < words.length; i++) {
    if ( i == 0) {
      result += words[i]
    }
    else {
      result += words[i][0].toUpperCase()
      result += words[i].slice(1,words[i].length)
    }
  }
  return result
}
