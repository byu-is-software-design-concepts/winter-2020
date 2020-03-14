export const spinWords = sentence => {
  let wordarr = sentence.split(" ");

  for (let i = 0; i < wordarr.length; i++)
  {
      if (wordarr[i].length >= 5)
      {
          let word = wordarr[i].split('');
          word.reverse();
          wordarr[i] = word.join('');
      }
  }
  
  sentence = wordarr.join(" ");
  return sentence
}
