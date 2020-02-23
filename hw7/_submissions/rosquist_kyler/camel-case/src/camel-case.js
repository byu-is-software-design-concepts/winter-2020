export const convertToCamelCase = str => {
  
  const words = str.split(' ');

  try {

    let results = words[0];
    
    for (let i = 1; i < words.length; i++) {
      results += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return results;

  } catch(err) {

    console.log('Nope');
    return '';
  }
  
}
