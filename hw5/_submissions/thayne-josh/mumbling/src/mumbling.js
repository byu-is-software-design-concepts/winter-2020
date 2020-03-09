export const createMumble = str => {
  let repeat = 1
  let currChar
  let mumblStr
  if(str.length == 0) {
    return str
  }
  for(let i = 0; i <= str.length; i++) {
      currChar = str[i]
    for (let i = 1; i <= repeat; i++) {
      mumblStr += currChar
    }
    repeat++

  }
  return mumblStr
}
