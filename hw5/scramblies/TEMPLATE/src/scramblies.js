export const scramble = (str1, str2) => {
    for(let i = 0; i < str2.length; i++){
      if(str1.includes(str2.charAt(i)) === false){
        return false
      }
    }
  return true
}
