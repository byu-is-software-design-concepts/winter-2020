export const getFibNumber = steps => {
  // TODO
  if (steps === 0){
    return 0
  }
  else if (steps === 1 || steps === 2){
    return 1
  }
  else{
    return getFibNumber(steps-1) + getFibNumber(steps-2)
  }
  //4
  //fib of 2 is 1
  //fib of 3 is 2
}
