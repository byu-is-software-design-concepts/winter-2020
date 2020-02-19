export const getFibNumber = steps => {
  let number = 0
  let add = 1
  let temp;

  while (steps > 0) {
      temp = add

      add = add + number

      number = temp

      steps--

  }
  console.log(number)
return number
}