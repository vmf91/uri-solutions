var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = lines.shift();
n = parseInt(parseFloat(n) * 100)

var x_100 = Math.floor(n/(100*100))
var r_100 = n%(100*100)

var x_50 = Math.floor(r_100/(50*100))
var r_50 = r_100%(50*100)

var x_20 = Math.floor(r_50/(20*100))
var r_20 = r_50%(20*100)

var x_10 = Math.floor(r_20/(10*100))
var r_10 = r_20%(10*100)

var x_5 = Math.floor(r_10/(5*100))
var r_5 = r_10%(5*100)

var x_2 = Math.floor(r_5/(2*100))
var r_2 = r_5%(2*100)

var x_1 = Math.floor(r_2/(1*100))
var r_1 = r_2%(1*100)

var x_050 = Math.floor(r_1/(0.5*100))
var r_050 = r_1%(0.5*100)

var x_025 = Math.floor(r_050/(0.25*100))
var r_025 = r_050%(0.25*100)

var x_010 = Math.floor(r_025/(0.1*100))
var r_010 = r_025%(0.1*100)

var x_005 = Math.floor(r_010/(0.05*100))
var r_005 = r_010%(0.05*100)

var x_001 = (n%(0.05*100))/(0.01*100)

console.log('NOTAS:')
console.log(x_100 + ' nota(s) de R$ 100.00')
console.log(x_50 + ' nota(s) de R$ 50.00')
console.log(x_20 + ' nota(s) de R$ 20.00')
console.log(x_10 + ' nota(s) de R$ 10.00')
console.log(x_5 + ' nota(s) de R$ 5.00')
console.log(x_2 + ' nota(s) de R$ 2.00')
console.log('MOEDAS:')
console.log(x_1 + ' moeda(s) de R$ 1.00')
console.log(x_050 + ' moeda(s) de R$ 0.50')
console.log(x_025 + ' moeda(s) de R$ 0.25')
console.log(x_010 + ' moeda(s) de R$ 0.10')
console.log(x_005 + ' moeda(s) de R$ 0.05')
console.log(x_001 + ' moeda(s) de R$ 0.01')