export const getFibNumber = steps => {
  // I looked up this ratio online. It gets numbers extremely close to the resulting fibonacci number if you use it in the formula below.
  const goldenRatio = 1.618034
  return Math.round((Math.pow(goldenRatio, steps) - Math.pow(1 - goldenRatio, steps)) / Math.pow(5, 0.5))
}
