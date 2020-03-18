export const getFibNumber = steps => {
  let a = 0;
  let b = 1;
  let c;

  if (steps == a) {
    return a
  }

  for (let x = 1; x < steps; x++) {
    c = a;
    a = b;
    b = c + b;
  }
  return b
}