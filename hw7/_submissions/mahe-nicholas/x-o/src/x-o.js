export const isXAndOValid = str => {
  // TODO
  let resultHash = {}
  resultHash['x'] = 0
  resultHash['o'] = 0
  str.split('').forEach(letter => {
    if (resultHash.hasOwnProperty(letter.toLowerCase())){
      resultHash[letter.toLowerCase()] += 1
    }
    else{
      resultHash[letter.toLowerCase()] = 0
    }
  })
  console.log(resultHash['x'])
  if (resultHash['x'] === resultHash['o'])
  {
    return true
  }
  return false

}
