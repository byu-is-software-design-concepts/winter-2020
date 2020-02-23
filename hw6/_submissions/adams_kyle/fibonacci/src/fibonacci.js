export const getFibNumber = steps => {
  if (steps === 0) {
    return 0;
  } else if (steps === 1 || steps === 2) {
    return 1;
  } else {
    let previous = 0;
    let current = 1;
    let temp;
    
    let i = 1;
    while (i < steps) {
      temp = previous;
      previous = current;
      current = temp + current;
      i++;
    }
    return current;
  }
}