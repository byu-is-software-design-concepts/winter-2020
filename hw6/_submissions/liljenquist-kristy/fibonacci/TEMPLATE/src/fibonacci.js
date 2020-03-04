export const getFibNumber = steps => {
  //You get first two starting numbers, 0 and 1, 
  //and the next number in the sequence is always the sum of the 
  //previous two numbers.

  let fibArray = [0, 1];

  for (let i = 2; i < steps + 2; i++) {
    fibArray.push(fibArray[i-2] + fibArray[i-1]);
  }

  return fibArray[steps]
}
