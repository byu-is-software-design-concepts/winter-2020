export const createMumble = str => {
  // TODO
  console.log(str)
  const allLetters = str.split("")
  console.log(allLetters)
  let mumble = ""
  console.log(mumble)

  for(let iCount = 0; iCount < allLetters.length; iCount++) {
    mumble += allLetters[iCount].toUpperCase()
    console.log(mumble)
    for(let iInner = 0; iInner < iCount; iInner++) {
      mumble += allLetters[iCount].toLowerCase()
      
      console.log(mumble)
    }

    if(allLetters.length > 1) {
      mumble += "-"
      console.log(mumble)
    }
  }

  console.log(mumble)
  if(allLetters.length > 1) {
    mumble = mumble.slice(0, -1)
  }
  console.log(mumble)
  return mumble
}