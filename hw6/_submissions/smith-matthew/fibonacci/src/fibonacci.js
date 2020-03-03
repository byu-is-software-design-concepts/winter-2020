export const getFibNumber = steps => {
  if (steps === 0) {
    return 0;
  } else if (steps === 1) {
    return 1;
  } else {
    let arr = [0, 1]
    while (arr.length - 1 != steps) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr[steps]
  }
}
