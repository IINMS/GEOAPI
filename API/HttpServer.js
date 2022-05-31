var express = require("express");
var conn = require('../db/connect.js');
var cors = require("cors");
var main = require('../db/main.js');
var common = require('../db/comm.js');
//var foreign = require('../db/foreignTables.js');
var foreign = require('../db/foreignTablesStage4.js');
var bodyParser = require("body-parser");
var type1 = require('../db/type1.js');
var type2 = require('../db/type2.js');
var type3 = require('../db/type3.js');
//const responseTime = require('response-time')
//const axios = require('axios');
//const redis = require('redis');
//var cacher = require('sequelize-redis-cache');
//const foreign = require('./db/foreignTables.js');
//const foreign = require('./db/foreignTablesStage4.js');
//const bodyParser = require("body-parser");
//const express = require("express");
//const cors = require("cors");
var fs = require("fs");
var https = require('https');
var http = require('http');
var privateKey = fs.readFileSync('C:/xampp/apache/conf/ssl.key/server.key', 'utf8');
var certificate = fs.readFileSync('C:/xampp/apache/conf/ssl.crt/server.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };
var app = express();
// create and connect redis client to local instance.


 // use response-time as a middleware
//app.use(responseTime()); 
app.use(bodyParser.json());

//var redisClient = redis.createClient(6379, '123.45.678.901');
//var RedisStore = require('connect-redis')(session);

/*app.use(session({
	store: new RedisStore({client: redisClient}),
  	secret: 'gBpwmwE0PmyDKPuLhhmY8CONJQW3TnCujQuoE8nVao',
  	resave:false,
  	saveUninitialized: true,
  	cookie: { secure: true }
}));

redisClient.on("error", function (err) {
    console.log(" Error " + err);
});*/



app.use('/resources', express.static('resources'));
app.use('/app', express.static('app'));
app.use('/ext', express.static('ext'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));



app.use(cors());

var Logger = require('./LogToFiles');
app.use('/logger', Logger);

 
var Rules = require('./Rules');
app.use('/rules', Rules);

var Filter = require('./Filter');
app.use('/filter', Filter);

var Query = require('./Query');
app.use('/query', Query);


app.post('/WriteToFs', function (req, res, next) {

	var file = req.body.DbName;
	file = JSON.parse(req.body.DbName)
	// strip off the data: url prefix to get just the base64-encoded bytes
	//var data = file.replace(/^data:application\/\w+;base64,/, "");
	var length = Buffer.byteLength(file.data, 'base64')
	var buf = Buffer.alloc(length, file.data, 'base64');

	var path = file.path + "/" + file.name;
		//Wfile(path,res,buf)

	fs.writeFile(path, buf, (err) => {
		if (err) throw err;

		console.log('The "data to append" was appended to file!');

	});

	res.end();
})

async function Wfile(path, res, buf) {

	await fs.writeFile(path, buf, (err) => {
		if (err) throw err;

		console.log('The "data to append" was appended to file!');

	});


}


app.post('/cat', function (req, res, next) {
	//var query1=request.body.var1;
	var cat = req.body.Category;


	console.log("cat ", cat);
	

	main.privil.UserCat.findAll({ attributes: [ 'Workspace'], where: { UserCatID: cat } }).then(users => {
		console.log("All users:", JSON.stringify(users, null, 4));

		res.send(users)
	})

})

app.post('/lang', function (req, res, next) {
	console.log("lang ", lang.LangIni());
	res.send(lang.LangIni())
})



app.post('/modify', function (req, res, next) {



	console.log("DataObj ", req.body.DataObj);

	console.log("DbName ", req.body.DbName);
	console.log("DbName ", req.body.ID);

	console.log("type1 Duct", type1.Duct);

	var ID = req.body.ID;
	var ID_Value = req.body.Value;
	var obj = req.body.DataObj;

	var DbName = req.body.DbName;
	// var toUpdate={comm_comment:"Updated"};

	Modify(obj, DbName, ID, ID_Value, res);
 

})

async function Modify(obj, DbName, ID, ID_Value, res) {

	var table = TableName.ORMTableName(DbName); //Returns the table "function" 

	await table.update(JSON.parse(obj), {
		where: {
			[ID]:
				ID_Value
		}

	}).then(result => {
		console.log("success", JSON.stringify(result, null, 4));
		// sequelize.save();
		res.send('1');
	}).catch(function (err) {


		console.log("\x1b[31m", "Error", JSON.stringify(err, null, 4), "\x1b[0m"); //"\x1b[0m" reset //"\x1b[31m" red
		res.send('0');
	})
}


app.post('/TableRule', function (req, res, next) { // request for fetching only the columns of a table

	var Name = req.body.DbName
	res.send(Rules.TableRules(Name))


})




app.post('/FieldRule', function (req, res, next) { // request for fetching only the columns of a table

	var Name = req.body.DbName
	res.send(FieldRules.FieldRules(Name))


})





app.post('/showColumns', function (req, res, next) { // request for fetching only the columns of a table

	var table = "comm_";
	table = JSON.stringify(table); //variable to string
	table = table.replace('"', "'"); //replaces first occurence of "" to ''
	table = table.replace('"', "'"); //replaces last (second) occurence of "" to ''

	var schema = "public";
	schema = JSON.stringify(schema);
	schema = schema.replace('"', "'");
	schema = schema.replace('"', "'");


	conn.sequelize.query("select column_name FROM information_schema.COLUMNS where table_schema=" + schema + " and table_name=" + table, {

		type: conn.sequelize.SELECT


	}).then(TableColumns => {
		console.log("All users:", JSON.stringify(TableColumns, null, 4));
		res.send(TableColumns)
	})

})


app.post('/addition', function (req, res, next) { //post request to db for fetching data 
	//console.log("req ",req);
	//console.log("req ",req.body.id);
	var id = req.body.id;
	//var table =TableName.ORMTableName(req.body.DbName);
	//var language=req.body.language;
	//console.log("name of table ",table);
	console.log("DataObj ", req.body.DataObj);
	//var langData=lang.LangIni(language);
	var toadd = req.body.DataObj;

	var Ntoadd = JSON.parse(toadd);

	var DbName = req.body.DbName;
	Addition(Ntoadd, DbName, res);




})



async function Addition(Ntoadd, DbName, res) {

	var table = TableName.ORMTableName(DbName);
	await table.create(Ntoadd
	).then(usersData => {

		console.log("All users:", JSON.stringify(usersData, null, 4));
		// res.send({ users:usersData, language: langData })
	}).then(result => {
		console.log("success", JSON.stringify(result, null, 4));
		// sequelize.save();
		res.send('1'); //1 Success

	}).catch(function (err) {
		//console.log("\x1b[31m", "Error", JSON.stringify(err, null, 4), "\x1b[0m"); //"\x1b[0m" reset //"\x1b[31m" red
		console.log(JSON.stringify(err, null, 4));
		res.send('0'); //0 Error


	})



}






app.get('/show', function (req, res, next) { //post request to db for fetching data 
	console.log("req ",req.query.id);
	//console.log("req ",req.body.id);
	var id = req.query.id;
	
	common.Comm.findAll({
		where: { comm_rel_FID: id },
		include: [			
			type1.Duct,
			type1.Keyshut,
			type1.Depress,
			type1.Acc,
			type1.Relvalve,
			type1.Vane,
			type2.Evane,
			type2.Airvac,
			type2.Evac,
			type2.Shutter,
			type2.Cpoint,
			type3.Tank,
			type3.Stream,
			type3.Drill,
			type3.Wmeter

		]



	}).then(usersData => {
		console.log("All users:", JSON.stringify(usersData, null, 4));
		res.send({ users: usersData })
	})
})



app.post('/show', function (req, res, next) { //post request to db for fetching data 
	//console.log("req ",req);
	//console.log("req ",req.body.id);
	var id = req.body.id;
	var language = req.body.language;

	var langData = lang.LangIni(language);
	console.log(id);


	common.Comm.findAll({
		where: { comm_rel_FID: id },
		include: [			
			type1.Duct,
			type1.Keyshut,
			type1.Depress,
			type1.Acc,
			type1.Relvalve,
			type1.Vane,
			type2.Evane,
			type2.Airvac,
			type2.Evac,
			type2.Shutter,
			type2.Cpoint,
			type3.Tank,
			type3.Stream,
			type3.Drill,		
			type3.Wmeter
		]



	}).then(usersData => {
		console.log("All users:", JSON.stringify(usersData, null, 4));
		res.send({ users: usersData, language: langData })
	})
})



app.get('/getORMTableName', function (req, res, next) { //post request to db
	var dbTableName = req.query.tableName
	var dbFieldName = req.query.fieldName
	var table = TableName.ORMTableName(dbTableName);
	res.send({ filter: table.rawAttributes[dbFieldName].type.key })
})


var httpServer = http.createServer( app);
 var server = app.listen(8088,function(){
var host = server.address().address;
var port = server.address().port;
console.log("App Listening at http://%s:%s",host,port);
})


//module.exports = { app,httpsServer};
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443, function () {
	var host = httpsServer.address().address;
	var port = httpsServer.address().port;
	httpsServer.setTimeout(500000);
	console.log("App Listening at https://%s:%s", host, port);
})
module.exports = {app,httpsServer}