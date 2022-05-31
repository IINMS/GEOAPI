const express = require('express');
const { Op } = require("sequelize");
const queryRouter = express.Router(); 
const main = require('../db/main.js');
const common = require('../db/comm.js');
const type1 = require('../db/type1.js');
const type2 = require('../db/type2.js');
const type3 = require('../db/type3.js');
const lang = require('../ReadIni.js');
const TableName = require('../TableName.js');

queryRouter.post('/cat', function (req, res, next) {
	//var query1=request.body.var1;
	var cat = req.body.Category;
	//console.log("/query/cat ", cat);

	main.privil.UserCat.findAll({ attributes: [ 'Workspace'], where: { UserCatID: cat } }).then(users => {
		console.log("All users:", JSON.stringify(users, null, 4));

		res.send(users)
	})

})
queryRouter.post('/lang', function (req, res, next) {



	console.log("lang ", lang.LangIni());



	res.send(lang.LangIni())
})
 
 

queryRouter.post('/modify', function (req, res, next) {



	console.log("DataObj ", req.body.DataObj);

	console.log("DbName ", req.body.DbName);
	console.log("ID ", req.body.ID);

	console.log("type1 Duct", type1.Duct);

	var ID = req.body.ID;
	
	var obj = req.body.DataObj;
 
	var DbName = req.body.DbName;

	//var value=req.body.Value
	// var toUpdate={comm_comment:"Updated"};

	Modify(obj, DbName, ID,  res);
 

})

async function Modify(obj, DbName, ID,  res) {

	var table = TableName.ORMTableName(DbName); //Returns the table "function" 
	var pk=table.getpk();
	console.log(pk);
	await table.update(JSON.parse(obj), {
		where: {
			[pk]:
			ID
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





// queryRouter.post('/addition', function (req, res, next) { //post request to db for fetching data 
// 	//console.log("req ",req);
// 	//console.log("req ",req.body.id);
// 	var id = req.body.ID;
// 	//var table =TableName.ORMTableName(req.body.DbName);
// 	//var language=req.body.language;
// 	console.log("id ",id);
// 	console.log("DataObj ", req.body.DataObj);
// 	//var langData=lang.LangIni(language);
// 	var toadd = req.body.DataObj;

// 	var Ntoadd = JSON.parse(toadd);

// 	var DbName = req.body.DbName;
// 	Addition(Ntoadd, DbName, res);

// })


queryRouter.post('/addition', function (req, res, next) { //post request to db for fetching data 
	//console.log("req ",req);
	//console.log("req ",req.body.id);
	var id = req.body.ID;
	var table =TableName.ORMTableName(req.body.DbName);
	//var language=req.body.language;
	console.log("id ",id);
	console.log("DataObj ", req.body.DataObj);
	//var langData=lang.LangIni(language);
	var toadd = req.body.DataObj;

	var Ntoadd = JSON.parse(toadd);
 	var pk=table.getpk();
 
	Ntoadd[pk]=id;
		console.log("DataObj ", Ntoadd);
	

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







queryRouter.post('/show', function (req, res, next) { //post request to db for fetching data 
	//console.log("req ",req);
	//console.log("req ",req.body.id);
	var id = req.body.id;
	var language = req.body.language;
	console.log(language);
	var langData = lang.LangIni(language);

	 
	
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



module.exports = queryRouter;