export const createMumble = str => {
  // TODO
  let split = str.toLowerCase().split('')

  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].toUpperCase() + split[i].repeat(i)
  }

  return split.join('-')
}
