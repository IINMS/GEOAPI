var express = require("express");
var conn = require('./db/connect.js');
var cors = require("cors");
var main = require('./db/main.js');
var common = require('./db/comm.js');
var foreign = require('./db/foreignTables.js');
var bodyParser = require("body-parser");

var type1 = require('./db/type1.js');
var type2 = require('./db/type2.js');
var type3 = require('./db/type3.js');

var fs = require("fs");
const https = require('https');
var privateKey = fs.readFileSync('C:/xampp/apache/conf/ssl.key/server.key', 'utf8');
var certificate = fs.readFileSync('C:/xampp/apache/conf/ssl.crt/server.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };


var app = express();

var lang = require('./ReadIni.js').default;

var lang2 = require('./ReadFile.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/resources', express.static('resources'));
app.use('/app', express.static('app'));
app.use('/ext', express.static('ext'));
app.use('/sass', express.static('sass'));
//app.use('/app.js',express.static(__dirname + '/app.js'));
//app.use('/app.json',express.static(__dirname + '/app.json'));
app.use('/bootstrap.js', express.static('../extjs/' + '/bootstrap.js'));
//app.use('/bootstrap.json',express.static(__dirname + '/bootstrap.json'));
//app.use('/bootstrap.css',express.static(__dirname + '/bootstrap.css'));
/*app.get("/",function(req,res){
res.sendFile('C:/xampp/htdocs/geo/tools/extjs'+"/"+"index.html");
});*/
/*
function hello() {
    another.User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});
}*/
app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	req.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/cat', cors(), function (req, res, next) {
	//var query1=request.body.var1;
	var cat = req.query.Category;


	console.log("cat ", cat);
	//console.log("req ",req.query.Category);
	/*conn.sequelize.query("select * from usercat where 'UserCatID' like :SimpleUser ",
    
	).then(users => {
	 console.log("All users:", JSON.stringify(users, null, 4));
   })*/
	/*conn.sequelize.query("select * from pois.pois_stage2 ").then(users => {
	 console.log("All users:", JSON.stringify(users, null, 4));
   })*/

	main.privil.UserCat.findAll({ attributes: ['RoleOfUser'], where: { UserCatID: cat } }).then(users => {
		console.log("All users:", JSON.stringify(users, null, 4));
		res.send(users)
	})

})

app.get('/lang', function (req, res, next) {



	console.log("lang ", lang.LangIni());



	res.send(lang.LangIni())
})



app.post('/modify', cors(), function (req, res, next) {



	console.log("DataObj ", req.body.DataObj);

	console.log("DbName ", req.body.DbName);
	console.log("DbName ", req.body.ID);

	console.log("type1 Duct", type1.Duct);

	var ID = req.body.ID;
	var ID_Value = req.body.Value;
	var obj = req.body.DataObj;

	var DbName = req.body.DbName;
	// var toUpdate={comm_comment:"Updated"};

	var toUpdate = { "duct_type_ID": "58", "duct_csection": "3.8", "duct_depth": "1" };
	//console.log("obj "+toUpdate);
	obj = JSON.parse(obj);
	// console.log("toUpdate "+ typeof toUpdate);
	// if( JSON.stringify(toUpdate) === JSON.stringify(obj))
	// console.log("Same"+JSON.stringify(toUpdate) );

	// console.log(" "+JSON.stringify(obj) );
	/*   var myObj={}
for (let [key, value] of Object.entries(obj)) 
	  myObj[key]=value;*/

	/*	type1.Duct.update(obj , {
  where: {
   duct_type_ID: ID
  }
}).then(res => {
  console.log("res", JSON.stringify(res, null, 4));
   
}).catch(function (err) {
   console.log("Error", JSON.stringify(err, null, 4));
	
	
	
})*/

	//  console.log( "key "+key+" value " +value);


	//conn.sequelize.query("update  type_duct set   duct_csection=3.8 where 'duct_type_ID' = '58'")

	for (let [column, val] of Object.entries(obj)) {
		console.log("key " + JSON.stringify(column) + " value " + val);
		column = JSON.stringify(column);
		// val=JSON.stringify(val);
		if (column != "duct_type_ID") {

			conn.sequelize.query('update ' + DbName + ' set ' + column + '=' + val + ' where ' + JSON.stringify(ID) + '=' + ID_Value, {

				// replacements: { key: key },	
				//replacements:{ ID: ID,value: value,column: column, DbName:DbName} 
				attributes: [column]

			})
				.then(res => {
					console.log("success", JSON.stringify(res, null, 4));

				}).catch(function (err) {
					console.log("Error", JSON.stringify(err, null, 4));



				})
		}
	}


	/*app.get('/lang', function (req, res,next) {
		//var query1=request.body.var1;
	 var cat=req.query.Category;
	
	
	 main.privil.UserCat.findAll({ attributes:['RoleOfUser'], where:{UserCatID:cat}} ).then(users => {
	  console.log("All users:", JSON.stringify(users, null, 4));
	  res.send( users )
	})*/

})

app.get('/showColumns', function (req, res, next) {

	var table = "comm_";
	common.Comm.query('select COLUMN_NAME FROM information_schema.COLUMNS ', {
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
			type3.Struct,
			type3.Wmeter


		]



	}).then(usersData => {
		console.log("All users:", JSON.stringify(usersData, null, 4));
		// res.send({ users:usersData, language: langData })
	})

})

app.post('/show', function (req, res, next) { //post request to db
	//console.log("req ",req);
	//console.log("req ",req.body.id);
	var id = req.body.id;
	var language = req.body.language;
	//console.log('%c' + req.body.id ,'background: #222; color: #bada55');
	var langData = lang.LangIni(language);
	test = "comm_type_ID"

	common.Comm.findAll({
		where: { [test]: id },
		include: [
			foreign.POI,
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
			type3.Struct,
			type3.Wmeter


		]



	}).then(usersData => {
		console.log("All users:", JSON.stringify(usersData, null, 4));
		res.send({ users: usersData, language: langData })
	})

})
app.get('/area', function (req, res, next) { //post request to db

	var language = req.body.language;
	//console.log('%c' + req.body.id ,'background: #222; color: #bada55');
	var langData = lang.LangIni(language);
	foreign.POI.findAll({ attributes: ['area'], group: ["area"], order: [['area', 'ASC']] })
		.then(areaData => {
			console.log("All area:", JSON.stringify(areaData, null, 4));
			res.send({ area: areaData })
		})

})
/*app.get('/snippet', function (req, res, next) { //post request to db
	
 foreign.POI.findAll({attributes: ['snippet'],group: ["snippet"],order: [['snippet', 'ASC']]})
 .then(snippetData => {
  console.log("All snippet:", JSON.stringify(snippetData, null, 4));
  res.send({ snippet:snippetData})
})
	
})*/

app.get('/name', function (req, res, next) { //post request to db

	foreign.POI.findAll({ attributes: ['name'], group: ["name"], order: [['name', 'ASC']] })
		.then(nameData => {
			console.log("All name:", JSON.stringify(nameData, null, 4));
			res.send({ name: nameData })
		})

})

app.get('/snippet', function (req, res, next) { //post request to db
	conn.sequelize.query('SELECT snippet FROM pois.pois_stage2 group by snippet \
	union select snippet from pois.pipelines_stage2 order by snippet ASC')
		.then(snippetData => {
			console.log("All SNIPPET:", JSON.stringify(snippetData, null, 4));
			res.send({ snippet: snippetData })
		})

})


// res.send('POST request to the homepage')
//})
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443, function () {
	var host = httpsServer.address().address;
	var port = httpsServer.address().port;
	console.log("App Listening at https://%s:%s", host, port);
})
/*var server = app.listen(8088,function(){
var host = server.address().address;
var port = server.address().port;
console.log("App Listening at http://%s:%s",host,port);
})*/