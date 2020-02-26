export const getFibNumber = steps => {
  
  let fibNum = 1
  let smFibNum = 0

  if (steps == 0 || steps == 1) { return 0 }
  for (let i = 0; i < steps - 1; i++) {
    let temp = smFibNum
    smFibNum = fibNum
    fibNum += temp
  }
  return fibNum
}
