export const createMumble = str => {
  // TODO
  let result = ''

  for (let i = 0; i < str.length; i++) {
    result += str.charAt(i).toUpperCase()
    result += str.charAt(i).repeat(i)
    if (i < (str.length -1)){
    result += '-'
    }
  }
  return result
}
