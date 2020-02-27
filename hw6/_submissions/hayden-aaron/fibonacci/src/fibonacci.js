export const getFibNumber = steps => {

  //Recursive solution
  /*
  if (steps === 0) return 0
  if (steps < 1) return 1
  return getFibNumber(steps - 1) + getFibNumber(steps - 2)
  */

  let firstValue = 1
  let secondValue = 0
  let temp

  while(steps > 0)
  {
    temp = firstValue
    firstValue = firstValue + secondValue
    secondValue = temp
    steps--
  }

  return secondValue
}
