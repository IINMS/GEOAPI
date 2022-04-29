const express = require('express');
//const rules = express.Rules();
const filterRouter = express.Router();
 
const conn = require('../db/connect.js');
const lang = require('../ReadIni.js');
const TableName = require('../TableName.js');

filterRouter.post('/filterQuery', function (req, res, next) { //post request to db
	var field = req.body.field
	var dbTableName = req.body.tableName
	var table = TableName.ORMTableName(dbTableName);
	table.findAll({ attributes: [field], group: [field] })
		.then(data => {
			console.log("All filter:", JSON.stringify(data, null, 4));
			res.send({ filter: data ,tableName:dbTableName,field:field})
		})
})


filterRouter.get('/filterRawQuery', function (req, res, next) { //post request to db
	 console.log(req.query);
	var query = req.query
	
	conn.sequelizeConn.query(query)
		.then(data => {
			console.log("All filter:", JSON.stringify(data, null, 4));
			res.send({ filter: data })
		})
})

filterRouter.get('/hi', function (req, res, next) { //post request to db

			//.log("All filter:", JSON.stringify(data, null, 4));
			res.send("{ filter: data }")
		
})

filterRouter.post('/getORMTableName', function (req, res, next) { //post request to db
	var dbTableName = req.body.tableName
	var dbFieldName = req.body.fieldName
	var table = TableName.ORMTableName(dbTableName);
	res.send({ filter: table.rawAttributes[dbFieldName].type.key })

})

filterRouter.get('/langData', function (req, res, next) { //post request to db
	var language = req.body.language;
	var langData = lang.LangIni(language);
	var filenames = lang.ReadDir("filter");
	var filterFields = lang.ReadFile(filenames, "filter");
	res.send({ langDataFromIni: langData, filterFields: filterFields })
})

module.exports = filterRouter;