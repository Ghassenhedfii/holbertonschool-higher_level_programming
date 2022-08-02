#!/usr/bin/node
let count = 0;
exports.logMe = function (ghassen) {
  console.log(count + ': ' + ghassen);
  count++;
};
