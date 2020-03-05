export const convertToCamelCase = str => {
    let words = str.split(' ');
    let i = 0;
    while (i < words.length) {
        let word = words[i];
        if (i <= 0) {
            words[i] = word.toLowerCase();
        } else {
            words[i] = word[0].toUpperCase() + word.slice(1,word.length).toLowerCase();
        }
        i++;
    }
    return words.join('');
}