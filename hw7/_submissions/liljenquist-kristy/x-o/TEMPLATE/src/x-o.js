export const isXAndOValid = str => {
  // Write the function `isXAndOValid(str)` to check to see if a string has the same amount of 'x's and 'o's. 
  //The method must return a boolean and be case insensitive. The string can contain any letter.

  var countX = 0;
  var countO = 0;

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if (current == 'x' || current == 'X') {
      countX += 1;
    }

    if (current == 'o' || current == 'O') {
      countO += 1;
    }
    
  }

<<<<<<< HEAD
    
    return countX == countO;
  
=======
  if (countX == countO) {
    return true
  }
  
  else {
    return false
  }
>>>>>>> c6f3851efd15f94a00c78d2794247d2229c7ed28

}
