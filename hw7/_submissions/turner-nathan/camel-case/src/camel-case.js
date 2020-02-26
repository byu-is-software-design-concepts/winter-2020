export const convertToCamelCase = str => {
  // Lower case the whole string, split string by spaces, loop over array to capitalize, then join array.
  str = str.toLowerCase()

  let strings = str.split(' ')
  for(let i = 0; i < strings.length; i++) {
    if (i > 0) {
      strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].substring(1)
    }
  }

  str = strings.join('')

  return str
}
