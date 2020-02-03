export const uniqueInOrder = str => {
  let arr = str.split("")
  arr = new Set(arr)
  arr = Array.from(arr)
  console.log(arr)
  return arr
}