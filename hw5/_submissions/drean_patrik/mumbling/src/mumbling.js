export const createMumble = str => {
<<<<<<< HEAD:hw5/_submissions/drean_patrik/mumbling/src/mumbling.js
  // TODO
  return undefined
=======
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
>>>>>>> poulson-gage:hw5/mumbling/TEMPLATE/src/mumbling.js
}
