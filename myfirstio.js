var fs = require('fs');

var filename = process.argv[2];

var buf = fs.readFileSync(filename)

var str = buf.toString().split("\n");
console.log(str.length - 1);