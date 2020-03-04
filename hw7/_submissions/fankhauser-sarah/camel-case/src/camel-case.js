export const convertToCamelCase = str => {
  let words = str.split(' ')
  words[0] = words[0].toLowerCase()
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].toLowerCase()
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return words.join('')
}
