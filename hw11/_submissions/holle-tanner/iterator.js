let iterator = (function() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let index = 0
    let length = data.length;

return {
    next: function() {
        let object;
        if (!this.hasNext()) {
            return null;
        }
        object = data[index];
        index++;
        return object;
    },
    hasNext: function() {
        return index < length;
    },
    rewind: function() {
        index = 0;
        return data[index];
    },
    current: function() {
        return data[index];
    }
}
}()); 