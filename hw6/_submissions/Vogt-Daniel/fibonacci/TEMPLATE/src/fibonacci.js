export const getFibNumber = steps => {
  
  let sequence = [0, 1]
  let nextNum

  // create sequence
  for (let i = 1; i < steps; i++){
    nextNum = sequence[i] + (sequence[i-1])

    sequence.push(nextNum)
  }

  return sequence[steps]
}
