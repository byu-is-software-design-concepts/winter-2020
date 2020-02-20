export const uniqueInOrder = str => {
  let arr = []

  if (str !== '') {
    let temp = str.split('')

    arr.push(temp[0])
    for (let i = 1; i < temp.length; i++) {
      if (!arr.includes(temp[i]) || temp[i] !== temp[i-1]) {
        arr.push(temp[i])
      }
    }
  }

  return arr
}
