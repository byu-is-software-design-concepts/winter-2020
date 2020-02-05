export const moveZeroesToEnd = arr => {
  // I ended up going down a rabbit hole with the wrong logic, so I went back 
  // and just used Patrik's example.
  let zeroes = arr.filter(item => item === 0)
  let items = arr.filter(item => item !== 0)

  return items.concat(zeroes)
}
