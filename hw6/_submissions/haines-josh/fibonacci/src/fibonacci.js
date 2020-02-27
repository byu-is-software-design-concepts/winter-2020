export const getFibNumber = steps => {
  // TODO
  var fib1 = 0
  var fib2 = 1
  var fibsum = 0
  var arr = []

  for (let i = 0; i <= steps; i++){
    arr.push(fib1)
    fibsum = fib1 + fib2
    fib1 = fib2
    fib2 = fibsum
  }
  return arr[arr.length - 1];
}
