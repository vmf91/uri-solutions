var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

for(var k = 0; k < n; k++){
    var line = lines.shift()
    var line2 = []
    
    for(var i = 0; i < line.length; i++){
        if(line[i].match(/[a-zA-Z]/i)){
            var c = String.fromCharCode(line[i].charCodeAt(0) + 3)
            line2.push(c)
        }else{
            line2.push(line[i])
        }
    }

    line2 = line2.reverse()
    line = line2

    for(var i = Math.floor(line.length/2); i < line.length; i++){
        line2[i] = String.fromCharCode(line[i].charCodeAt(0) - 1)
    }

    line2 = line2.join('')
    console.log(line2)
}