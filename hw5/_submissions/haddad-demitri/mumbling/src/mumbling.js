export const createMumble = str => {
  /*
  createMumble("abcd")    # "A-Bb-Ccc-Dddd"
  createMumble("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  createMumble("cwAt")    # "C-Ww-Aaa-Tttt"
  createMumble("")        # ""
  */

  let result = '';
  let s = str;

  if (s.length > 0){
    for (var i = 0; i < s.length; i++){
      result += s.charAt(i).toUpperCase()
      result += s.charAt(i).repeat(i)
      if (i < s.length-1){
        result += '-'
      }
    }
  }

  return result
}
