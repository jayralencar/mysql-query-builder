/**
Class Update
*/
function Update(argument) {
	
}

Update.prototype = require('./delete.js');


/**
* Update
* @param {Object} data
* @return {Object} this, {Function} callback
*/
Update.prototype.update = function(data, callback){
	var sets = [];
   	if(typeof(clause)=="function"){
   		callback = clause;
   		clause = {};
   	}
   	for(key in data){
         if(data[key]!=null){
            sets.push(key+" = '"+data[key]+"'");
         }
   	}

	var sql = "UPDATE "+this._table+" SET "+sets.join(', ')+" "+this.getWhere();

	this.connection.query(sql, callback);
}

module.exports = new Update();