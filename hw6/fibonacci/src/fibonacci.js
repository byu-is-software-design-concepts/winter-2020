export const getFibNumber = steps => {
  if (steps == 0) {
    return 0;
  } else if (steps == 1 || steps == 2) {
    return 1;
  } else {
    let previous = 0;
    let num = 1;
    let temp;

    let i = 1;
    while (i < steps) {
      temp = previous;
      previous = num;
      num = temp + num;

      i++;
    }
    return num;
  }
}