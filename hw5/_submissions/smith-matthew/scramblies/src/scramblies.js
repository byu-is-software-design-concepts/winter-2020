export const scramble = (str1, str2) => {
  let str1Map = {};
  let str2Map = {};

  for (let i in str1) {
    if (str1Map[str1[i]]) {
      str1Map[str1[i]] += 1
    } else {
      str1Map[str1[i]] = 1
    }
  }

  for (let i in str2) {
    if (str2Map[str2[i]]) {
      str2Map[str2[i]] += 1
    } else {
      str2Map[str2[i]] = 1
    }
  }

  for (let char in str2Map) {
    if (str2Map[char] > str1Map[char] || !str1Map[char]) {
      return false;
    }
  }
  return true
}