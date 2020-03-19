class Iterator {
    constructor( start = 0, end = 50, i = 1 ) {
        this.start = start;
        this.end = end;
        this.i = i;
    }
    [myIterator]() {
        let counter = 0;
        let next = this.start;
        return  {
            next: () => {
                if ( next < this.end ) {
                    let result = { value: next,  done: false }
                    next = next + this.i;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            }
        }
    }
};