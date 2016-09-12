/**
Class Join
*/
function Join(argument) {
	this._joins = [];
	this.getJoin = function(){
		var joins = '';
		if(this._joins.length>0){
			for(var i in this._joins){
				var join = this._joins[i];
				joins +=" "+join.join+" "+join.table+" ON "+join.on1+" "+join.operator+" "+join.on2;
			}
		}
		return joins;
	}	
}

/**
* join
* @param {String} table , on1, operator, on2
* @return {Object} this
*/
Join.prototype.join = function(table, on1, operator, on2){
	this._joins.push({
		table: table,
		on1: on1,
		operator: operator,
		on2: on2,
		join: "JOIN"
	});
	return this;
}

/**
* leftJoin
* @param {String} table , on1, operator, on2
* @return {Object} this
*/
Join.prototype.leftJoin = function(table, on1, operator, on2){
	this._joins.push({
		table: table,
		on1: on1,
		operator: operator,
		on2: on2,
		join: "LEFT JOIN"
	});
	return this;
}

/**
* innerJoin
* @param {String} table , on1, operator, on2
* @return {Object} this
*/
Join.prototype.innerJoin = function(table, on1, operator, on2){
	this._joins.push({
		table: table,
		on1: on1,
		operator: operator,
		on2: on2,
		join: "INNER JOIN"
	});
	return this;
}

/**
* rightJoin
* @param {String} table , on1, operator, on2
* @return {Object} this
*/
Join.prototype.rightJoin = function(table, on1, operator, on2){
	this._joins.push({
		table: table,
		on1: on1,
		operator: operator,
		on2: on2,
		join: "RIGHT JOIN"
	});
	return this;
}

module.exports = new Join();

