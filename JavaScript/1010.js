var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift();
p1 = p1.split(' ')

var p1_code = parseInt(p1[0])
var p1_units = parseInt(p1[1])
var p1_price = parseFloat(p1[2])

var p2 = lines.shift();
p2 = p2.split(' ')

var p2_code = parseInt(p2[0])
var p2_units = parseInt(p2[1])
var p2_price = parseFloat(p2[2])

total = p1_units * p1_price + p2_units * p2_price

console.log("VALOR A PAGAR: R$ " + total.toFixed(2))