export const moveZeroesToEnd = arr => {
  let zeros = []
  let new_arr = []
  arr.forEach(function (element) {
    if (element != 0) {
      new_arr.push(element)
    } else {
      zeros.push(element)
    }
  });

  arr = new_arr.concat(zeros)

  return arr
}