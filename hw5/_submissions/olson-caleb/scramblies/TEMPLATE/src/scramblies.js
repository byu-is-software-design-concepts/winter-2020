export const scramble = (str1, str2) => {
  let found = []
  for (var i = 0; i < str2.length; i++) {
    for (var x = 0; x < str1.length; x++) {
      if (str2[i] == str1[x]) {
        found.push(str1[x])
        console.log(str1[x])
      }
    }
  }
  console.log("Found: " + found)
  let word = ""
  for (var i = 0; i < found.length; i++) {
    word += found[i]
  }
  if (word == str2) {
    return true
  }
  else {
    return false
  }
}
