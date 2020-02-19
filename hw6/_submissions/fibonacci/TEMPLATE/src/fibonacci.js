export const getFibNumber = steps => {
  if(steps === 0){
    return 0
  }
  if(steps === 1){
    return 1
  }
  let firstNum = 0;
  let secondNum = 1;
  let result = 0;
  for(let i = 0; i < steps - 1; i++){
    result = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = result;
  }

  return secondNum;
}

