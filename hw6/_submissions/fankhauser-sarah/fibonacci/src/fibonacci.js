export const getFibNumber = steps => {
  let nums = [0,1]
  for (let i = 2; i <= steps; i++) {
    nums[i] = nums[i-2] + nums[i-1]
  }

  return nums[steps]
}
