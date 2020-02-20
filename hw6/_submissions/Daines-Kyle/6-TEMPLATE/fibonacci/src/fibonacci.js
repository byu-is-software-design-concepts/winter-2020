export const getFibNumber = steps => {
  let currentNum = 0;
  let nextNum = 1;
  for (let i = 0; i < steps; ++i)
  {
    let tempNum = nextNum
    nextNum = currentNum + nextNum
    currentNum = tempNum
  }
  return currentNum
}
