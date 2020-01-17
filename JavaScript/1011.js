var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift());
var pi = 3.14159
var v = 4/3 * pi * Math.pow(r, 3)

console.log("VOLUME = " + v.toFixed(3))