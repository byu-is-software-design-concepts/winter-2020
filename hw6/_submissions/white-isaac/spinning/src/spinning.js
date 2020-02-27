export const spinWords = sentence => {
    let spun_sentence = "";
    let sent_array = sentence.split(' ');

    for (let i = 0; i < sent_array.length; i += 1) {
        let temp_word = sent_array[i];
        
        if (temp_word.length >= 5) {
            let temp_array = temp_word.split('');
            for (let j = 0; j < Math.floor(temp_array.length / 2); j += 1) {
                let temp_char = temp_array[j];
                temp_array[j] = temp_array[temp_array.length - 1 - j];
                temp_array[temp_array.length - 1 - j] = temp_char;
            }
            temp_word = temp_array.join("");

        }

        spun_sentence += temp_word;

        if (i < (sent_array.length - 1)) {
            spun_sentence += ' ';
        }
    }

    return spun_sentence;
}
