export const scramble = (str1, str2) => {
  let arr1 = str1.split('').sort()
  let arr2 = str2.split('').sort()
  let iCount = 0
  if (arr1.length== arr2.length){
    for(let iCount2 = 0; iCount2 <= arr1.length && iCount < arr2.length; iCount2++){
      if(arr2[iCount] === arr1[iCount2]){
        iCount++
      }
    }
    if(iCount === arr1.length){
      return true
    }
  }

  return false
}
