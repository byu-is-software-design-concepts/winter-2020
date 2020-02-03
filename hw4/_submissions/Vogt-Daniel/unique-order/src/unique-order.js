export const uniqueInOrder = str => {
  let arr = []
  //if string empty return empty array
  if (str === ""){
    arr = []
  }
  if (str != ""){

    //split string into an array of characters
    arr = str.split("")

    //remove recurring characters
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === arr[i+1]){
        arr.splice(i,1)
      }
    }
  }
  return arr
}
