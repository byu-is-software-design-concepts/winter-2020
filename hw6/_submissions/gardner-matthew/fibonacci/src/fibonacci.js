export const getFibNumber = steps => {
  let arrNums = [0, 1];

  if (steps < 2) {
    return arrNums[steps];
  }

  for (let iCount = 2; iCount <= steps; iCount++) {
    let newNum = arrNums[iCount - 1] + arrNums[iCount - 2];
    arrNums.push(newNum);
  }
  return arrNums.pop();
};
