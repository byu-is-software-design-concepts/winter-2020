export const scramble = (str1, str2) => {
  let count = 0
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str2.charAt(i) === str1.charAt(j)) {
        count = count + 1
      }
    }
  }
  if (count == str2.length) {
    return true
  }
  return false
}
