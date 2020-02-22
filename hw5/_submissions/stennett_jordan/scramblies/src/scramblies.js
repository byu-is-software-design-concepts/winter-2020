export const scramble = (str1, str2) => {
  let dict = {}

  for (let char of str2) {
    if (dict[char]) {
      dict[char] += 1
    } else {
      dict[char] = 1
    }
  }

  for (let char of str1) {
    if (dict[char]) {
      dict[char]--
    }
  }

  for (let key in dict) {
    if (dict[key] > 0) {
      return false
    }
  }

  return true
}
