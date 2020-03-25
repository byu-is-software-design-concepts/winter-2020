export const uniqueInOrder = str => {
<<<<<<< HEAD
  let arr = [];
  // TODO
  for (i = 0; i < arr.length; i++) {}

  return arr;
};
=======
  let result = []

  str.split('').forEach((letter, index, array) => {
    if (index < array.length - 1) {
      letter !== array[index + 1] && result.push(letter)
    } else {
      array[index - 1] !== letter && result.push(letter)
    }
  })

  return result
}
>>>>>>> 36fd9ae43ab63342321d615adce09d7dc77d3bde
