var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function highest(a, b){
    return (a + b + Math.abs(a-b))/2
}

var line = lines.shift();
line = line.split(' ')

var a = parseInt(line[0])
var b = parseInt(line[1])
var c = parseInt(line[2])

x = parseInt(highest(a, b))
y = parseInt(highest(x, c))

console.log(y + " eh o maior")