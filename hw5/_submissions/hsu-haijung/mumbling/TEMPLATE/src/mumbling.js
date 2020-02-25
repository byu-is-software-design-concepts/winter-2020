export const createMumble = str => {
  let temp_arr = str.split("")
  str = ""
  for (var i = 0; i < temp_arr.length; i++) {
    for (var j = 0; j < i + 1; j ++) {
      if (j == 0) {
        str += temp_arr[i].toUpperCase()
      }
      else {
        str += temp_arr[i].toLowerCase()
      }
    }
    if (i < temp_arr.length - 1)
    str += "-"
  }
  return str
}
