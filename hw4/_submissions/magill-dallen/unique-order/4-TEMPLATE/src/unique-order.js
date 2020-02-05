export const uniqueInOrder = str => {
  let arr = str.split("")
  const arr2 = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] != arr[i + 1]){
      arr2.push(arr[i])
    }
  }
  return arr2
}
