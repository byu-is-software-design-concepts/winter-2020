export const createMumble = str => {
  var i;
  let mumble = ''
  for  (i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase()
    console.log(letter)
    for (var x = 0; x < i + 1; x++) {
      if (x == 0) {
        mumble += letter.toUpperCase()
      }
      else {
        mumble += letter
      }
    }
    if (i != str.length - 1) {
      mumble += '-'
    }
  }
  console.log(mumble)
  return mumble
}
