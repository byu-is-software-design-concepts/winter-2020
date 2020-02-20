export const getFibNumber = steps => {
  let stepCount = steps

  let a = 1
  let b = 0
  let temp;

  while (stepCount > 0){

    temp = a;
    a = a + b;
    b = temp;

    stepCount--;
  }

  return b
}
