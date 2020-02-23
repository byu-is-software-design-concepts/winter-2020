export const getFibNumber = steps => {
  let current = 1;
  let previous = 0;
  let newest;

  if (steps === 0) {
    return 0;
  }

  for (let i = 0; i < (steps - 1); i++) {
    newest = current + previous;
    previous = current;
    current = newest;
  }

  return current;
};
