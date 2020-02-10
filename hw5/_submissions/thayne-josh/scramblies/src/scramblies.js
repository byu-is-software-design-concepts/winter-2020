export const scramble = (str1, str2) => {
  let count
  let contains = true
  if(contains)
    while(count < str2.length) {
     {
      if(str1.includes(str2[count])) {
        contains = true
      }
      else {
        contains = false
        count = str2.length
      }
      
    }
  }
  return contains
}
