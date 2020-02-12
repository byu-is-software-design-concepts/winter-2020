export const createMumble = str => {
// function createMumble(str){
  let output = "" 
  for (let outer = 0; outer < str.length; outer++){
    output = output + str[outer].toUpperCase()
    for ( let inner = 0; inner < outer; inner++) {
      output = output + str[outer].toLowerCase()
    }
    if (outer != (str.length - 1) ) {
      output = output + "-"
    }
  }
  return output
} 
// console.log(createMumble("abcd"))
// Complete the function createMumble(str). The following examples show the mumble pattern.

// createMumble("abcd")    # "A-Bb-Ccc-Dddd"
// createMumble("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// createMumble("cwAt")    # "C-Ww-Aaa-Tttt"
// createMumble("")        # ""