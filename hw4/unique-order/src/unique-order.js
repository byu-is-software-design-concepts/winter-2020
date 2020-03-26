export const uniqueInOrder = str => {
  let arr = []
  let size = str.length
  let arraysize = 0
  if (size === 0){
    return arr
  }
  for (let x = 0; x < size; x++){
    if (!arr[0]){
      arr.push(str[0])
      arraysize += 1
    }
    else{
      if (arr[arraysize-1] !== str[x]){
        arr.push(str[x])
        arraysize += 1
      }
    }
  }
  return arr
}
