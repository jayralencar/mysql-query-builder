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



// insert
// builder.table('pessoas').insert({nome:'Jayr',email:'email@mail'}, function(err, res){
// 	console.log(res.insertId)
// });

