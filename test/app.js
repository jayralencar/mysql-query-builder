var builder = require('../index');

builder.connect({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'api'
});

builder.table('pessoas')
	.select('nome','email')
	.get(function(err, rows, fields){
		console.log(rows)
	});