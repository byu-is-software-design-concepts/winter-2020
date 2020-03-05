export const getFibNumber = steps => {
  let startingArr = [0, 1];
  while (startingArr.length <= steps) {
    const arrLength = startingArr.length;
    const nextVal = startingArr[arrLength - 1] + startingArr[arrLength - 2];
    startingArr.push(nextVal);
  }
  return startingArr[steps];
};
