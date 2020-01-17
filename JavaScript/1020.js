var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

var y = Math.floor(n / 365)
var y_r = n % 365

var m = Math.floor(y_r / 30)
var d = y_r % 30

console.log(y + ' ano(s)')
console.log(m + ' mes(es)')
console.log(d + ' dia(s)')