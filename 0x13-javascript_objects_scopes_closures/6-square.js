#!/usr/bin/node
const Square1 = require('./4-rectangle');

module.exports = class Square extends Square1 {
    charPrint(c) {
        if (c === undefined) {
            super.print();
        } else {
            for (let i = 0; i < this.width; i++) {
                console.log(c.repeat(this.height));
            }
        }
    }
};
