export const getFibNumber = steps => {
  let firstVal = 0
  let secondVal = 1
  let nums = []
  let final = 0

  if (steps === 0) {
    final = 0
  } else if (steps === 1) {
    final = 0
  } else {
    nums[0] = 0
    nums[1] = 1
    for (let i = 2; i <= steps; i++) {
      nums[i] = nums[i-1] + nums[i-2]
    }
    final = nums[steps]
  }
  return final
}
