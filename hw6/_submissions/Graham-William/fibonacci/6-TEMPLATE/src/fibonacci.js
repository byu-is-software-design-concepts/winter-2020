export const getFibNumber = steps => {
  // TODO
    if (steps <= 2) return 1;
  
    return getFibNumber(steps - 1) + getFibNumber(steps - 2);
  }


