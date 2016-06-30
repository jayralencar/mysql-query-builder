var builder = require('../index');

builder.connect({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'api'
});

builder.table('pessoas')
	.whereNotIn('id',[1,2])
	.get(function(err, rows, fields, sql){
		console.log(sql)
		if(err){
			console.log(err)
		}
		console.log(rows)
	});