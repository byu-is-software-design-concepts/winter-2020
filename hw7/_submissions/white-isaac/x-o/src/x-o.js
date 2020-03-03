export const isXAndOValid = str => {
  let isEqual = false;
  str = str.toLowerCase();
  let countX = (str.split("x").length - 1)
  let countO = (str.split("o").length - 1)

  if (countX === countO) {
    isEqual = true;
  }

  return isEqual;
}
