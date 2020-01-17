var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseFloat(lines.shift());
var x = b*c

console.log("NUMBER = " + a)
console.log("SALARY = U$ " + x.toFixed(2))