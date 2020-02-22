export const getFibNumber = steps => {
  
  return helper(steps, 1, 0)
}

const helper = (steps) => {
  if (steps === 0) return 0
  if (steps === 1) return 1

  return helper(steps - 1) + helper(steps - 2)
}
