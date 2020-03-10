export const uniqueInOrder = str => {
  let arr = []
  str = str.replace(" ","")
  let array=str.split('')
  for (let index = 0; index < array.length; index++) {
    if (array[index]!=array[index+1]){
      if(isNaN(Number(array[index]))){
        console.log(array[index])
        arr.push(array[index])
      }
    }
  }
  console.log(arr)
  return arr
}
