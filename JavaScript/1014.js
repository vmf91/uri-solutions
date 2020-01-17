var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = parseFloat(lines.shift());

var t = x/y

console.log(t.toFixed(3) + " km/l")