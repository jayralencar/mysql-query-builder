var builder = require('../index');

builder.connect({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'api'
});

// builder.table('pessoas')
// 	.leftJoin('pessoa','pessoas.id','=','pessoa.id')
// 	.get(function(err, rows, fields, sql){
// 		console.log(sql)
// 		if(err){
// 			console.log(err)
// 		}
// 		console.log(rows)
// 	});

builder.query('SELECT * FROM pessoas',[],function(err, rows, fields){
	console.log(rows)
})