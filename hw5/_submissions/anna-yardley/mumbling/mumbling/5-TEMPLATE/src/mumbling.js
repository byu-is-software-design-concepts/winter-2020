export const createMumble = str => 

{
	let letters = s.toLowerCase().split('')
	console.log(letters)
  for(let i = 0; i < letters.length; i++) {
    console.log(letters[i])
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
    console.log(letters[i])
  }
  return letters.join('-')
}

// {
//   let letter = str.charAt(i)
  
//   for (i=1, i>=str.length, i++) {
//     let letter = toUpperCase(str.charAt(i)) 
//     for (x=1, x>=i, x++)
//     {

//     }


//   }

//   return str
// }
