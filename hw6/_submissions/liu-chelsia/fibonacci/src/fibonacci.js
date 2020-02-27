export const getFibNumber = steps => {
  var result = steps;
  var fibArr = [0, 1]; // Always has two starting numbers, can initialize array like so
  var sum = 0;

  if(steps > 0) {
    for(let i = 2; i <= steps; i++){
      sum = fibArr[i - 1] + fibArr[i - 2]; // Next number is always the sum of the previous two numbers
      fibArr.push(sum);
    }
   result = fibArr[steps];
  }

  return result
}
