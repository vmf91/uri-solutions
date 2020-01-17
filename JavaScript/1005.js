var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var x = (a*3.5+b*7.5)/(3.5+7.5)

console.log("MEDIA = " + x.toFixed(5))