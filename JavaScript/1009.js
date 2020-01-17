var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = lines.shift();
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());
var x = b + 0.15 * c

console.log("TOTAL = R$ " + x.toFixed(2))