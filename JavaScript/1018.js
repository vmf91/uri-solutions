var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

var r_100 = n%(100)
var x_100 = Math.floor(n/(100))

var x_50 = Math.floor(r_100/(50))
var r_50 = r_100%(50)

var x_20 = Math.floor(r_50/(20))
var r_20 = r_50%(20)

var x_10 = Math.floor(r_20/(10))
var r_10 = r_20%(10)

var x_5 = Math.floor(r_10/(5))
var r_5 = r_10%(5)

var x_2 = Math.floor(r_5/(2))
var r_2 = r_5%(2)

var x_1 = Math.floor(r_2/(1))

console.log(n)
console.log(x_100 + ' nota(s) de R$ 100,00')
console.log(x_50 + ' nota(s) de R$ 50,00')
console.log(x_20 + ' nota(s) de R$ 20,00')
console.log(x_10 + ' nota(s) de R$ 10,00')
console.log(x_5 + ' nota(s) de R$ 5,00')
console.log(x_2 + ' nota(s) de R$ 2,00')
console.log(x_1 + ' nota(s) de R$ 1,00')