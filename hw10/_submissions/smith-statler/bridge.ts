function Circle(color) {
    this.color = color;

    this.toString = function () {
        return `${this.color.getColorName()} Circle`;
    };
}

function Rectangle(color) {
    this.color = color;

    this.toString = function () {
        return `${this.color.getColorName()} Rectangle`;
    };
}

function Triangle(color) {
    this.color = color;

    this.toString = function () {
        return `${this.color.getColorName()} Triangle`;
    };
}

function Red() {
    this.getColorName = function () {
        return 'Red';
    }
}

function Blue() {
    this.getColorName = function () {
        return 'Blue';
    }
}

function Green() {
    this.getColorName = function () {
        return 'Green';
    }
}