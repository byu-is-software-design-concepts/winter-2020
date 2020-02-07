export const createMumble = str => {
    // TODO
    let result = "";

    if (str !== "") {
        str.split('').map((character, index) => {
            result += character.toUpperCase();

            let i = 0;
            while (i < index) {
                result += character.toLowerCase();
                i++;
            }

            (i + 1) < str.length 
            ? result += "-" 
            : "";
        });
        return result;
    }
    return result;
}