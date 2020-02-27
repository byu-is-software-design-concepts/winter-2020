export const scramble = (str1, str2) => {
  
let passFail = true;
let removeLetter = "";

// let str1 = "rkqodlw"
// let str2 = "world"

  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2.charAt(i))) {
      passFail = true

      // letter to remove
      removeLetter = str1.indexOf(str2.charAt[i])

      // remove letter from string if taken
      str1 = str1.slice(0, removeLetter) + str1.slice(removeLetter + 1)
      console.log(str1)
    }
    else {
      passFail = false
      break
    }

  }
  return passFail
}
