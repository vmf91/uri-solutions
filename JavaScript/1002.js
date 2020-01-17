var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift());
var n = 3.14159
var a = n * r * r

console.log('A=' + (a.toFixed(4)));