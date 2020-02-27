export const createMumble = str => {
  let current
  let final
  let count = 1
  if(str.length == 0) {
    return str
  }
  for(let i = 0; i <= str.length; i++) {
    current = str[i]
    for (let i = 1; i <= count; i++) {
      final += current
    }
    count++

  }
  return final
}
