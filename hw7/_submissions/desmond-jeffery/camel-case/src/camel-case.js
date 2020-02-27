export const convertToCamelCase = str => {
    str = str.split("")
    let count = 0

    for (let s of str){
        if (s == " ") {
            str[count] = ""
            str[count+1] = str[count+1].toUpperCase()
        }

        count += 1
    }
    str = str.join("")

    return str
}
