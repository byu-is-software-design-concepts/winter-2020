export const getFibNumber = steps => {
  // TODO
  var previous_first = 0,
    previous_second = 1,
    next = 1;
  if (steps <= 1) {
    return steps;
  } else {
    for (var i = 2; i <= steps; i++) {
      next = previous_first + previous_second;
      previous_first = previous_second;
      previous_second = next;
    }
    return next;
  }
};

console.log(getFibNumber(1));
