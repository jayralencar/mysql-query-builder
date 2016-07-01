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

module.exports = new Join();

