var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

var s = n %(60)
var m_t = parseInt((n - s)/60)
var m = m_t%60
var h = parseInt((m_t - m)/60)

console.log(h + ':' + m + ':' + s);