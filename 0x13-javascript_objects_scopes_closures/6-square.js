function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};

function Square(size) {
    this.length = size;
    this.width = size;
}

Square.prototype = new Rectangle();
