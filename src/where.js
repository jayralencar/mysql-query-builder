/**
Class Where
*/
function Where(){
	this._clausales = [];
	this.getWhere = function(){
		if(this._clausales.length>0){
			var str = " WHERE ";
			for(var i in this._clausales){
				var cl = this._clausales[i];
				if(i == 0){
					str += cl.where;
				}else{
					if(cl.type == 1){
						str+=" AND "+cl.where;
					}else{
						str+=" OR "+cl.where;
					}
				}
			}
			return str;
		}else{
			return '';
		}
	}
}

Where.prototype = require('./join.js');

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
/**
* Where between
*
* @param {String} field, {String|number} from , {String|number} to,  {int} type
* @return {Object} this
*/
Where.prototype.whereBetween = function(field, from, to, type){
	this._clausales.push({
		type: type || 1,
		where: field+" BETWEEN '"+from+"' AND '"+to+"'"
	});
	return this;
}
/**
* Where not between
*
* @param {String} field, {String|number} from , {String|number} to , {int} type
* @return {Object} this
*/
Where.prototype.whereNotBetween = function(field, from, to, type){
	this._clausales.push({
		type: type || 1,
		where: field+" NOT BETWEEN '"+from+"' AND '"+to+"'"
	});
	return this;
}
/**
* or Where between
*
* @param {String} field, {String|number} from , {String|number} to
* @return {Object} this
*/
Where.prototype.orWhereBetween = function(field, from, to){
	this.whereBetween(field, from, to, 2)
	return this;
}
/**
* or Where not between
*
* @param {String} field, {String|number} from , {String|number} to
* @return {Object} this
*/
Where.prototype.orWhereNotBetween = function(field, from, to){
	this.whereNotBetween(field, from, to, 2)
	return this;
}

/**
* where in
*
* @param {String} field, {array} items, {int} type
* @return {Object} this
*/
Where.prototype.whereIn = function(field, items, type){
	this._clausales.push({
		type: type || 1,
		where: field +" in ('"+items.join("','")+"')"
	});
	return this;
}
/**
* where not in
*
* @param {String} field, {array} items, {int} type
* @return {Object} this
*/
Where.prototype.whereNotIn = function(field, items, type){
	this._clausales.push({
		type: type || 1,
		where: field +" not in ('"+items.join("','")+"')"
	});
	return this;
}
/**
* or where in
*
* @param {String} field, {array} items
* @return {Object} this
*/
Where.prototype.orWhereIn = function(field, items){
	this.whereIn(field, items,2);
	return this;
}
/**
* or where not in
*
* @param {String} field, {array} items
* @return {Object} this
*/
Where.prototype.orWhereNotIn = function(field, items){
	this.whereNotIn(field, items,2);
	return this;
}
module.exports = new Where();