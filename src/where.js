/**
Class Where
*/
function Where(){

}

/**
* Where
* @param {String|Array} params
* @return {Object} this
*/
Where.prototype.where = function(param){
	this.tableTest();
	if(arguments.length > 1){
		if(arguments.length > 2){
			this._clausales.push({
				type:1,
				where: arguments[0] + " " + arguments[1] + " '" + arguments[2] + "'"
			});
		}else{
			this._clausales.push({
				type:1,
				where: arguments[0] + " = '" + arguments[1] + "'"
			});
		}
	}else{
		for(var i = 0 ; i < param.length; i++){
			if(param[i].length > 2){
				this._clausales.push({
					type:1,
					where: param[i][0] + " " + param[i][1] + " '" + param[i][2] + "'"
				});
			}else{
				this._clausales.push({
					type:1,
					where: param[i][0] + " = '" + param[i][1] + "'"
				});
			}
		}
	}
	return this;
}

/**
* Where Or
* @param {String|Array} params
* @return {Object} this
*/
Where.prototype.whereOr = function(param){
	this.tableTest();
	if(arguments.length > 1){
		if(arguments.length > 2){
			this._clausales.push({
				type:2,
				where: arguments[0] + " " + arguments[1] + " '" + arguments[2] + "'"
			});
		}else{
			this._clausales.push({
				type:2,
				where: arguments[0] + " = '" + arguments[1] + "'"
			});
		}
	}else{
		for(var i = 0 ; i < param.length; i++){
			if(param[i].length > 2){
				this._clausales.push({
					type:2,
					where: param[i][0] + " " + param[i][1] + " '" + param[i][2] + "'"
				});
			}else{
				this._clausales.push({
					type:2,
					where: param[i][0] + " = '" + param[i][1] + "'"
				});
			}
		}
	}
	return this;
}



module.exports = new Where();