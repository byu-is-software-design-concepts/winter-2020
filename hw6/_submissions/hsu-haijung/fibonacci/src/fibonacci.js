export const getFibNumber = steps => {
  // TODO
  if (steps <= 2 && steps > 0)
    return 1
  else if (steps == 0)
    return 0
  else {
    return getFibNumber(steps - 1) + getFibNumber(steps - 2)
  }
}
