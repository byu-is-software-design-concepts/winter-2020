export const scramble = (str1, str2) => {
  let matches = 0
  for(let i = 0; i < str1.length; i++) {
    for(let x = 0; x < str2.length; x++) {
      if(str1.charAt(i) == str2.charAt(x)) {
        matches += 1
      }
    }
  }
  if (matches == str1.length) {
    return true
  }
  return false
}
