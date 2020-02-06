export const moveZeroesToEnd = arr => {
  let count = 0
  let i = 0
  let temp = []

  arr.forEach(element => {
    if (element === 0) {
      count++
    } else {
      temp.push(element)
    }
  })

  if (count > 0) {
    while (i < count) {
      temp.push(0)
      i++
    }
  }

  arr = temp
  return arr
}
