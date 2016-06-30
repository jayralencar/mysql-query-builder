var builder = require('../index');

builder.connect({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'api'
});

builder.table('pessoas')
	.select('nome','email')
	.where('id','>',1)
	.whereOr('email','like','%jay%')
	.get(function(err, rows, fields, sql){
		console.log(sql)
		console.log(rows)
	});