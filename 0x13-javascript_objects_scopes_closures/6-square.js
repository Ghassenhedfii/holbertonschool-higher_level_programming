#!/usr/bin/node
module.exports = class Square extends require('./4.rectangle.js') {
    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }
            for (let i = 0; i < this.height; i++) {
                console.log(c.repeat(this.width));
            }
        }
    }

