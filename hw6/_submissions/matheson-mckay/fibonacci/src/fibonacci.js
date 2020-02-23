export const getFibNumber = steps => {
  let a = 1, b = 0, temp;
  while(steps > 0){
    temp = a;
    a = a + b;
    b = temp;
    steps--;
  }
  return b;
}
