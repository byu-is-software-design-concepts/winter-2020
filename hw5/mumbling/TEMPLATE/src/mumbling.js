export const createMumble = str => {
    let output = ''
    for(let outer = 0; outer < str.length; outer++) {
      for(let inner = 0; inner < outer + 1; inner++){
        if(inner === 0){
          output += str.charAt(outer).toUpperCase()
        }
        else {
          output += str.charAt(outer).toLowerCase()
        }
      }
      output += '-'
    }
    output = output.slice(0, -1)
  return output
}
