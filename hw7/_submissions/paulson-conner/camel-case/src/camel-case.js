export const convertToCamelCase = str => {
  const arr = str.toLowerCase().split(' ');

  const newArr = arr.map((element, index) => {
    if (index > 0) {
      return element[0].toUpperCase() + element.slice(1);
    }
    return element;
  });

  return newArr.join('');
}

// convertToCamelCase('hello case');
