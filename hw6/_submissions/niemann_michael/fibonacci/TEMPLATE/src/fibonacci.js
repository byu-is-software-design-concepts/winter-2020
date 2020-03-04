export const getFibNumber = steps => {
  let i = 1;
  let result = 1;
  let last = 0;
  let temp = 0;
  if (steps === 0){
    return 0
  }
  else if (steps === 1 || steps === 2){
    return 1
  }
  while (i < steps) {
    temp = last;
    last = result
    result = temp + result
    i++
    
  }
  return result
}
