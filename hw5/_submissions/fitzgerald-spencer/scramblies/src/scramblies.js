export const scramble = (str1, str2) => {
    let arr1 = [...str1];
    let arr2 = [...str2];

    for (const element of arr2) {
        if (arr1.includes(element)) {
            arr1.splice(arr1.indexOf(element),1);
        } else {
            return false;
        }
    }
    return true;
}
