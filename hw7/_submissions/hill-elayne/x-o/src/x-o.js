 export const isXAndOValid = str => {
  
  str = str.toLowerCase(); //make it case insensitive
  let theArray = str.split(""); //split string into array

  //count x's
  let countX = theArray.reduce( function( n, x ) {
    return n + (x === 'x');
  }, 0);
  
  // count o's
  let countO = theArray.reduce( function( n, o ) {
      return n + (o === 'o');
    }, 0);

  // check if counts match
  if ( countX == countO ) {
    return true;
  } 
  else {
    return false;
  }
}