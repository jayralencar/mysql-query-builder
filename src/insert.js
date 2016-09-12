/**
Class Insert
*/
function Insert(argument) {
	
}

Insert.prototype = require('./update.js');

/**
* insert
* @param {Object} data
* @return {Object} this, {Function} callback
*/
Insert.prototype.insert = function(data, callback){
	var keys = [];
   	var values = []
   	for(key in data){
   		keys.push(key);
   		values.push(data[key]);
   	}

   	var sql = "INSERT INTO "+this._table+" ("+keys.join(',')+") VALUES ('"+values.join("','")+"')";

   	this.connection.query(sql, callback);
}

module.exports = new Insert();