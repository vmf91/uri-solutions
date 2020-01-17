var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function mdc(a, b){
    while(b){
        var c = b
        b = a % b
        a = c
    }

    return a
}

var n = parseInt(lines.shift());

for(var i = 0; i < n; i++){
    var line = lines.shift();
    line = line.split(' ')
    
    var n1 = parseInt(line[0])
    var d1 = parseInt(line[2])
    var op = line[3]
    var n2 = parseInt(line[4])
    var d2 = parseInt(line[6])

    var n3 = 0
    var d3 = 0

    if(op == '+'){
        n3 = n1*d2 + n2*d1
        d3 = d1*d2
    }
    else if(op == '-'){
        n3 = n1*d2 - n2*d1
        d3 = d1*d2
    }
    else if(op == '*'){
        n3 = n1*n2
        d3 = d1*d2
    }
    else if(op == '/'){
        n3 = n1*d2
        d3 = n2*d1
    }
    
    var x = mdc(n3, d3)
    if(x < 0) x *= -1

    var n4 = parseInt(n3/x)
    var d4 = parseInt(d3/x)   

    console.log(n3 + "/" + d3 + " = " + n4 + "/" + d4)
    
}