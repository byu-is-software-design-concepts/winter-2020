export const createMumble = str => {  
  let output = ''

  for (let i = 0; i < str.length; i++) {
    output += str[i].toUpperCase()

      for (let j = 0; j < i; j++) {
        output += str[i].toLowerCase()
      }

    if (i != str.length - 1) {
      output += '-'
    }
  }
  
  return output

}
