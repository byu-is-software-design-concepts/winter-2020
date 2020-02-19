export const getFibNumber = steps => {
  let fibArray = [0,1];  
  if (steps < 2) {
    return fibArray[steps]
  }
  return fibR(steps, fibArray);
}

const fibR = (stop, fibArray) => {
  let length = fibArray.length;
  if (stop === length-1) return fibArray[stop];
  fibArray.push(fibArray[length-2] + fibArray[length-1]);
  return fibR(stop, fibArray);
}
