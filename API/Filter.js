const express = require('express');
//const rules = express.Rules();
const filterRouter = express.Router();
const conn = require('../db/connect.js');
const lang = require('../ReadIni.js');
const TableName = require('../TableName.js');




var fs = require("fs");
//const { Console } = require('winston/lib/winston/transports');

// Simply pass the port that you want a Redis server to listen on.
/*const server = new RedisServer(6379);
 
server.open((err) => {
  if (err === null) {
	var rc = redis.createClient(6379, 'localhost');
  }
});I*/



filterRouter.get('/filterRawQuery', function (req, res, next) { //post request to db
	var query = req.query.query
	console.log('RESSSSS' + res)	
	conn.cacheObj.ttl(5);
	console.log('query' + query)
	//conn.cacheObj.query(query)
	conn.cacheObj.query(query)

		.then(data => {
			console.log(conn.cacheObj.cacheHit);
			//console.log(cacheObj.cacheConditionalHit);
			//console.log(cacheObj.md);
			
			console.log("All filter:", JSON.stringify(data, null, 4));
			res.send({ filter: data })
		})
})
/*const fetchData = async (req, res, next) => {

	console.log("OUTPUT fetchData" + Object.keys(req.query))
	console.log("OUTPUT fetchData" + req.query._dc)	

}*/


async function fetchData(req, res, next) {
	console.log("fetchData")
	//let data = rc.get('subjects') 
	//console.log(data)
	//if(data)
	 // return data	
	var field = req.query.field	
	console.log(field)
	var dbTableName = req.query.tableName
	var table = TableName.ORMTableName(dbTableName);
 	console.log("tableName "+dbTableName)
	conn.cacheObj
		.model(dbTableName)	
		.ttl(5)
		
		conn.cacheObj.findAll({ attributes: [field], group: field})
		.then(results => {
			console.log("All filter:", JSON.stringify(results, null, 4));
			//rc.setex('subjects',3600,results)
			//console.log(cacheObj.cacheHit);
			//console.log(cacheObj.cacheConditionalHit);
			//console.log(cacheObj.md);
		//	console.log(cacheObj.method);
		//	console.log(cacheObj.modelName);
			//console.log(cacheObj.sequelize);
			//console.log(cacheObj.options)
			//console.log(cacheObj.seconds);		
			//console.log(cacheObj.redis);
			//return{ filter: results ,tableName:dbTableName,field:field}
			res.send({ filter: results ,tableName:dbTableName,field:field})
		})

		
	
 }

filterRouter.get('/filterQuery', fetchData);


//SAVE FILTER REQUEST

filterRouter.get('/loadFilter', function (req, res, next) {
	let path = __dirname + "/../filter/filter.json";
	//let path = "../filter/filter.json";
	console.log(process.cwd());
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) throw err;
		else {
			let filter 
			if(data){
			filter = JSON.parse(data);
			
			res.send({ filter: filter })
			console.log("SENDED");
		}
			else {
				console.log("empty")
			res.send({ filter: {} })
			}
			
		}
		
	});



});

filterRouter.get('/saveFilter', function (req, res, next) {
	let data = req.query.data;


	 console.log('DATA'+data)

	// strip off the data: url prefix to get just the base64-encoded bytes
	//var data = file.replace(/^data:application\/\w+;base64,/, "");
	let length = Buffer.byteLength(data, 'base64')
	let buf = Buffer.alloc(length, data, 'base64');

	let path = __dirname + "/../filter/filter.json";


	//Wfile(path,res,buf)

	
	fs.writeFile(path, data, (err) => {
		if (err) throw err;

		console.log('The "data to append" was appended to file!');

	});

	res.end();
})

/*function (req, res, next) { //post request to db
	var field = req.query.field
	var dbTableName = req.query.tableName
	var table = TableName.ORMTableName(dbTableName);
	var cacheObj = cacher(conn.sequelize, rc)
	.model(dbTableName)
		.ttl(5);
	  cacheObj.findAll({ attributes: [field], group: [field] })
		.then(data => {
			console.log("All filter:", JSON.stringify(data, null, 4));
			res.send({ filter: data ,tableName:dbTableName,field:field})
		})
})*/

filterRouter.get('/getORMTableName', function (req, res, next) { //post request to db
	var dbTableName = req.query.tableName
	var dbFieldName = req.query.fieldName
	var table = TableName.ORMTableName(dbTableName);
	res.send({ filter: table.rawAttributes[dbFieldName].type.key })
})
filterRouter.get('/langData', function (req, res, next) { //post request to db
	console.log('/langData')
	var language = req.query.language;
	var langData = lang.LangIni(language);
	var filenames = lang.ReadDir("filter");
	var filterFields = lang.ReadFile(filenames, "filter");
	res.send({ langDataFromIni: langData, filterFields: filterFields })
})
module.exports = filterRouter;