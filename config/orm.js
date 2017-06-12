//Here O.R.M writes functions that take inputs and conditions
// and turn them into database commands

var connection = require("./connection");

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(ob) {
	// column1=value1, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob[key]) {
			arr.push(key + "=" + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, results) {
			if (err) throw err;
			cb(results);
		});
	},
	
}