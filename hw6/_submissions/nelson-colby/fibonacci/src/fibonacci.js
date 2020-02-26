export const getFibNumber = steps => {
  let prevValues = []

  for (let i=0; i<(steps + 1); i++) {
    if (i < 2) {
      prevValues.push(i)
    }
    else {
      prevValues.push(prevValues[i-1] + prevValues[i-2])
    }
  }
  return prevValues.length > 0 ? prevValues[steps] : 0
}
