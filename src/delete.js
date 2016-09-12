/**
Class Delete
*/
function Delete(argument) {
	
}

/**
* Delete
* @param {Object} data
* @return {Object} this, {Function} callback
*/
Delete.prototype.delete = function(callback){

	var sql = "DELETE FROM "+this._table+" "+this.getWhere();

	this.connection.query(sql, callback);
}

module.exports = new Delete();