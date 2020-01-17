var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift();
line = line.split(' ')

var a = parseFloat(line[0])
var b = parseFloat(line[1])
var c = parseFloat(line[2])

var area_a = a*c/2
var area_b = 3.14159 * Math.pow(c, 2)
var area_c = (a + b) * c/2 
var area_d = Math.pow(b, 2)
var area_e = a*b

console.log('TRIANGULO: ' + area_a.toFixed(3))
console.log('CIRCULO: ' + area_b.toFixed(3))
console.log('TRAPEZIO: ' + area_c.toFixed(3))
console.log('QUADRADO: ' + area_d.toFixed(3))
console.log('RETANGULO: ' + area_e.toFixed(3))