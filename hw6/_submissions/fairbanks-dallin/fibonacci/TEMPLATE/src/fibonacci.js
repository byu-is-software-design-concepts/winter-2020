export const getFibNumber = steps => {
  let num1 = 0
  let num2 = 1
  let newnum = 0

for (let i = 1; i < steps; i++)
{
  newnum = num1 + num2
  num1 = num2
  num2 = newnum
}

  return newnum
}
