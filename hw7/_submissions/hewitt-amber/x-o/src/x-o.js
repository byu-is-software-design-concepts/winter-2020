export const isXAndOValid = str => {
    var str = document.getElementById("string").value;
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str) {
            count++;
        }

        if (xCount == yCount) {
            return "Valid"
        }
        else {
            return "Invalid"
        }
}
