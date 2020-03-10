export const createMumble = str => {
  
  var splitstring = str.split("")
  console.log(splitstring)
  var string = ""

  for (let index = 0; index < splitstring.length; index++) {
    string=string+splitstring[index].toUpperCase()
    console.log(string)
    var counter = 0
    while(counter<index){
      string+=splitstring[index].toLowerCase()
      console.log(splitstring[index].toLowerCase())
      counter+=1
    }
    if(index+1<str.length){
      string+="-"
    }
  }

  return string
}


// ```
// createMumble("abcd")    # "A-Bb-Ccc-Dddd"
// createMumble("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// createMumble("cwAt")    # "C-Ww-Aaa-Tttt"
// createMumble("")        # ""
// ```