export const getFibNumber = steps => {
  const goldenRatio = 1.618034
  
  return Math.round((Math.pow(goldenRatio, steps) - Math.pow(1 - goldenRatio, steps)) / Math.pow(5, 0.5))
}
