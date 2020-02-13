export const scramble = (str1, str2) => {
  // TODO
  if (str1.length < str2.length) return false

  const arr2 = str2.split("")

  str1.split("").forEach(val => {
      if (arr2.includes(val)) arr2.splice(arr2.indexOf(val), 1);
  })

  return arr2.length == 0
}
