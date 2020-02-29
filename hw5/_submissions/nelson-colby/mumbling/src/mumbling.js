export const createMumble = str => {
  let newStringArray = [];

  // For each letter in string, append a capitalized version plus 1 lowercase version
  // for the letter's position past the first element
  for (let i = 0; i < str.length; i++)  {
    let letterSequence = ''
    for (let count = 0; count < i+1; count++) {
      if (count === 0) {
        letterSequence += str[i].toUpperCase()
      }
      else {
        letterSequence += str[i].toLowerCase()
      }
    }
    newStringArray.push(letterSequence)
  }
  return newStringArray.join('-');
}
