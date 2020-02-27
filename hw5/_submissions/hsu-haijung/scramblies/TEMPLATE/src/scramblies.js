export const scramble = (str1, str2) => {
  for (var i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2.charAt(i)) == -1) 
      return false
  }
  return true
}
