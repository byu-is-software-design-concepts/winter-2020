export const spinWords = sentence => {
  // TODO
  let split_sentence = [];
  let spin_word = [];
  var x;
  split_sentence = sentence.split(" ");

  for (x = 0; x < split_sentence.length; x++) {
    if (split_sentence[x].length < 5) {
      //Don't Spin the word
      split_sentence[x] = split_sentence[x];
      console.log(split_sentence[x]);
    } else {
      //Spin the word bc length is >= 5
      spin_word = split_sentence[x].split("");
      spin_word = spin_word.reverse().join("");
      split_sentence[x] = spin_word;
      console.log(spin_word);
    }
  }
  return split_sentence.join(" ");
};