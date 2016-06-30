/*
The MIT License (MIT)

Copyright (c) 2015 Jayr Alencar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
'use strict';
function Builder(){
	this.mysql = require('mysql');
	this.config = {};
	this.connection = null;
	this._sql = '';
	this._table = null;
	this._fields = [];

	this.connectionTest = function(){
		if(!this.connection){
			throw "Not connected in a database";
		}
	}

	this.tableTest = function(){
		if(!this._table){
			throw "Please, inform a table";
		}
	}
}

Builder.prototype = require('./src/where.js');

/**
* Database connection
*
* @param {Object} config - host, database, user, pass, port
* @return {Object} this
*/
Builder.prototype.connect = function(config) {
	this.config = config;
	this.connection = this.mysql.createConnection(this.config);
	this.connection.connect();
	return this;
};

/**
* Choose table
*
* @param {String} table - table name
* @return {Object} this
*/
Builder.prototype.table = function(table){
	this.connectionTest();
	this._table = table;
	this._clausales = [];
	return this;
}

/**
* Inform fields
*
* @param {String|Object} fields
* @return {Object} this
*/
Builder.prototype.select = function(fields){
	this.tableTest();
	this._fields = [];
	if(arguments.length > 1){
		for(var i = 0 ; i < arguments.length ; i++){
			this._fields.push(arguments[i]);
		}
	}else{
		if(typeof(fields) == 'string'){
			this._fields = fields.spit(',');
		}else{
			this._fields = fields;
		}
	}
	return this;
}

/**
* Add field
*
* @param {String} field
* @return {Object} this
*/
Builder.prototype.addSelect = function(field){
	this.tableTest();
	this._fields.push(field);
	return this;
}

/**
* Get query result
*
* @ param {Function} callback
* @return {Object} this
*/
Builder.prototype.get = function(callback){
	this.connectionTest();
	this.tableTest();
	this._fields = (this._fields.length>0)?this._fields:['*'];
	this.sql = "SELECT "+this._fields.join(',')+" FROM "+this._table+this.getWhere();

	this.connection.query(this.sql, function(err, rows, fields){
		callback(err, rows, fields, this.sql);
	});
	return this;
}



module.exports = new Builder();