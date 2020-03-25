class MakeRange {
    constructor(first, last) {
     this._first = first;
     this._last = last;
    }
   
    [Symbol.iterator]() {
        return {
            next: () => {
                  if (this._first < this._last) {
                      return {value: this._first++, done: false}
                  } else {
                      return {done: true}
                  }
            }
        }
    }
   }