var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift();
p1 = p1.split(' ')

var x1 = parseFloat(p1[0])
var y1 = parseFloat(p1[1])

var p2 = lines.shift();
p2 = p2.split(' ')

var x2 = parseFloat(p2[0])
var y2 = parseFloat(p2[1])

var d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

console.log(d.toFixed(4))