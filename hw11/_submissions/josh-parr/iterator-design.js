function RangeIterator(start = 0, end = 500, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount += 1;
        return result;
      }
      return { value: iterationCount, done: true };
    }
  };
  return rangeIterator;
}

const iterator = new RangeIterator(0, 10, 2);
let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

console.log("Iterated over " + result.value + " times.");
