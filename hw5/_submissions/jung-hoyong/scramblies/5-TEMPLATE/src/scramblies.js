export const scramble = (str1, str2) => {
  if (str1.length >= str2.length) {
    for (let i = 0; i < str2.length; i++) {
      if (str1.includes[str2[i]]) {
        let index = str1.indexOf(str2[i])
        str1.splice(index, index)
      }
    }
    return true
  }
  return false
}