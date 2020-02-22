export const uniqueInOrder = str => {
  let arr = []
  let splitArr = []
  let checkedArr = []
  let memory = ''
  if(str == '') {
    return arr
  }
 
  splitArr = str.split("")
  for(let i = 0, len = splitArr.length; i < len; i++ ) {
    if(memory !== splitArr[i]) {
      if(splitArr[i-1] !== splitArr[i]) {
        checkedArr.push(splitArr[i])
        memory = splitArr[i]
        console.log(checkedArr)
      }
    }
  } 
  return checkedArr
}

