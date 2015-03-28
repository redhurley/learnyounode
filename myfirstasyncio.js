var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, "utf8", function countLines (err, data) {
	if (err) {
		console.log(data);
	} else {
		// split the result into an array
		var str = data.split("\n");
		console.log(str.length - 1);
	}
});