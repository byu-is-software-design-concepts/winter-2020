export const createMumble = str => {
  if (str === "")
  {
    return ""
  }
  let arr = str.split('').map(letter => letter.toUpperCase())
  let arr2 = []
  for(let i = 0; i < arr.length; i++)
  {
    let value = arr[i]
    let index = i
    let j = 0
    do {
      if(j != 0)
      {
        arr2.push(value.toLowerCase())
      }
      else{
        arr2.push(value)
      }
      j++
    } while(j < (index + 1))
    arr2.push("-")
  }
  arr2.pop()
  let answer = arr2.toString().replace(/,/g, '')
  return answer
}
