export const createMumble = str => {
  let result = '';
  let string = str;

  if (string.length > 0){
    for (var i = 0; i < string.length; i++){
      result += string.charAt(i).toUpperCase()
      result += string.charAt(i).repeat(i)
      if (i < string.length-1){
        result += '-'
      }
    }
  }
  return result
}
