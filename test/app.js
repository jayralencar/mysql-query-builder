var builder = require('../index');

builder.connect({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'api'
});

builder.table('pessoas')
	.join('pessoa','pessoas.id','=','pessoa.id')
	.get(function(err, rows, fields, sql){
		console.log(sql)
		if(err){
			console.log(err)
		}
		console.log(rows)
	});