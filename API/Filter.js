const express = require('express');
//const rules = express.Rules();
const filterRouter = express.Router();
const conn = require('../db/connect.js');
const lang = require('../ReadIni.js');
const TableName = require('../TableName.js');
const ReadFile = require('../ReadFile');
const fs = require('fs');


filterRouter.post('/filterRawQuery', function (req, res, next) { //post request to db
	var query = req.body.query
	console.log('RESSSSS' + res)	
	conn.cacheObj.ttl(5);
	// console.log('query' + query)
	conn.cacheObj.query(query)

		.then(data => {
			//console.log(conn.cacheObj.cacheHit);
			
			//console.log("All filter:", JSON.stringify(data, null, 4));
			res.send({ filter: data })
		})
})

filterRouter.get('/filterQuery', fetchData);

async function fetchData(req, res, next) {
	console.log("fetchData")
	var field = req.query.field	
	console.log(field)
	var dbTableName = req.query.tableName
	conn.cacheObj
		.model(dbTableName)	
		.ttl(5)
		
		conn.cacheObj.findAll({ attributes: [field], group: field})
		.then(results => {
			//console.log("All filter:", JSON.stringify(results, null, 4));
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

filterRouter.get('/loadSavedFilters', function (req, res, next) {
	//var query1=request.body.var1;
	var username = req.query.username;
	var table = TableName.ORMTableName("filter");

	console.log("username ", username);


	table.findAll(
		  {
				
				where:
				{
					  username: username
				}
		  }).then(users => {
				console.log("All users:", JSON.stringify(users, null, 4));

				res.send(users)
		  })

})

filterRouter.get('/deleteFilter', async function (req, res, next) {
	//var query1=request.body.var1;
	var id = req.query.id;
	var table = TableName.ORMTableName("filter");
	await table.destroy({
		where: { ["filterid"]: id },
	  }).then(result => {
		console.log("success", JSON.stringify(result, null, 4));
		res.send('1'); //1 Success

  }).catch(function (err) {
		//console.log("\x1b[31m", "Error", JSON.stringify(err, null, 4), "\x1b[0m"); //"\x1b[0m" reset //"\x1b[31m" red
		console.log(JSON.stringify(err, null, 4));
		res.send('0'); //0 Error
  })
})
filterRouter.get('/loadFilter', async function (req, res, next) {
	//var query1=request.body.var1;
	var id = req.query.id;
	var table = TableName.ORMTableName("filter");
	await table.findByPk(id).then(filter => {
				console.log("Filter:", JSON.stringify(filter, null, 4));

				res.send(filter)
		  })

})


filterRouter.post('/saveFilter', function (req, res, next) {
	console.log('/saveFilter')
	let data = req.body.data;
	console.log(data)
	//var DbName = req.body.DbName;
		FilterAddition(data, "filter", res)

})
async function FilterAddition(data, dbTablename, res) { 

	var table = TableName.ORMTableName(dbTablename);
		   var dataToAdd = JSON.parse( data );
		  	console.log(dataToAdd)
	await table.create(dataToAdd).then(filterData => {
		  console.log("FILTER", JSON.stringify(filterData, null, 4));
	}).then(result => {
		  console.log("success", JSON.stringify(result, null, 4));
		  res.send('1'); //1 Success

	}).catch(function (err) {
		  //console.log("\x1b[31m", "Error", JSON.stringify(err, null, 4), "\x1b[0m"); //"\x1b[0m" reset //"\x1b[31m" red
		  console.log(JSON.stringify(err, null, 4));
		  res.send('0'); //0 Error


	})



}
filterRouter.post('/modifyFilter', function(req, res, next)
{ 	
      var id = req.body.id;
      var data = req.body.data;

      //var DbName = req.body.DbName;
      // var toUpdate={comm_comment:"Updated"};

      FilterModify(data, "filter", id, res);


})

async function FilterModify(data, dbTablename, id,res)
{

      var table = TableName.ORMTableName(dbTablename); //Returns the table "function" 

      await table.update(JSON.parse(data),
      {
            where:
            {
                  ["filterid"]: id
            }

      }).then(result =>
      {
            console.log("success", JSON.stringify(result, null, 4));
            // sequelize.save();
            res.send('1');
      }).catch(function(err)
      {     console.log("\x1b[31m", "Error", JSON.stringify(err, null, 4), "\x1b[0m"); //"\x1b[0m" reset //"\x1b[31m" red
            res.send('0');
      })
}

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
filterRouter.get('/pk', function (req, res, next) { //post request to db
	var DbName=req.query.tableName
	var table = TableName.ORMTableName(DbName); //Returns the table "function" 
    var pk = table.getpk();
	
	
	res.send({pk})
})
filterRouter.get('/fk', function (req, res, next) { //post request to db
	var DbName=req.query.tableName	
	var table = TableName.ORMTableName(DbName); //Returns the table "function" 
    var fk = table.getfk();
	
	
	res.send({fk})
})
filterRouter.get('/complexTable', function (req, res, next) { //post request to db
	console.log('/complexTable')
	var labelId=req.query.labelId
	
	var file = ReadFile.ReadJsonFile("filter/"+labelId +".json");
	res.send({file})
})
module.exports = filterRouter;
