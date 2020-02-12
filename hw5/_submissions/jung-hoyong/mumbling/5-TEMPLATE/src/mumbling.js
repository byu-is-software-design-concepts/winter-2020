export const createMumble = str => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) {
        result += str[i].toUpperCase()
      } else {
        result += str[i].toLowerCase()
      }
    }
    if (i < str.length - 1) {
      result += '-'
    }
  }
  return result
}
