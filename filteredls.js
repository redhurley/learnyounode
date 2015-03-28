var fs = require("fs");
var path = require("path");

var pathname = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(pathname, function filterByFileType (err, list) {
	if (err) {
		console.log(list);
	} else {
		// Check each object in the returned array
		list.forEach(function (filename) {
			// Search each filename by extension type
			if (extension == path.extname(filename)) {
				// Return the name of the file
				console.log(filename);
			}
		});
	}
});