let iterator = (function() {

    let i = 0
    let items = [10, 12, 14, 15, 16, 56, 86, 90, 101, 121, 175]
    let len = items.len;

return {

    nextitem: function() {
        let item;
        if (!this.boolNext()) {
            return null;
        }

        item = items[i];
        i++;
        return item;
    },

    boolNext: function() {
        return i < len;
    },

    rewind: function() {
        i = 0;
        return items[i];
    },
    
    currentItem: function() {
        return items[i];
    }
}
}()); 