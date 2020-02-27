export const isXAndOValid = str => {
  let dict = {}
  for (let char of str) {
    if (dict[char]) {
      dict[char]++
    } else {
      dict[char] = 1
    }
  }

  if (dict['x'] !== dict['o']) return false
  // TODO
  return true
}
