export const getFibNumber = steps => {
  let last_num = 1
  let last2 = 0
  let output = 1
  if (steps == 0)
  {
    return 0
  }
  else
  {
    for (let i = 1; i < steps; i++)
    {
      output = last_num + last2
      last2 = last_num
      last_num = output
      
    }
    return output
  }
}
