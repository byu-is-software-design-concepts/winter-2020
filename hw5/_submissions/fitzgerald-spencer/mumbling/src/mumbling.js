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

// Complete the function `createMumble(str)`. The following examples show the mumble pattern.

// ```
// createMumble("abcd")    # "A-Bb-Ccc-Dddd"
// createMumble("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// createMumble("cwAt")    # "C-Ww-Aaa-Tttt"
// createMumble("")        # ""
// ```