const express = require("express");
var conn = require('../db/connect.js');
const cors = require("cors");
var main = require('../db/main.js');
var common = require('../db/comm.js');
//var foreign = require('../db/foreignTables.js');
const foreign = require('../db/foreignTablesStage4.js');
const bodyParser = require("body-parser");
const type1 = require('../db/type1.js');
var type2 = require('../db/type2.js');
var type3 = require('../db/type3.js');






const fs = require("fs");
const https = require('https');
const http = require('http');
const privateKey = fs.readFileSync('C:/xampp/apache/conf/ssl.key/server.key', 'utf8');
const certificate = fs.readFileSync('C:/xampp/apache/conf/ssl.crt/server.crt', 'utf8');
const credentials = {
      key: privateKey,
      cert: certificate
};


const app = express();




app.use(bodyParser.json());



app.use('/resources', express.static('resources'));
app.use('/app', express.static('app'));
app.use('/ext', express.static('ext'));
app.use(bodyParser.json(
{
      limit: '10mb'
}));
app.use(bodyParser.urlencoded(
{
      extended: true,
      limit: '10mb'
}));



app.use(cors());
 
const Logger = require('./LogToFiles');
app.use('/logger', Logger);


const Rules = require('./Rules');
app.use('/rules', Rules);

const Filter = require('./Filter');
app.use('/filter', Filter);

const Query = require('./Query');
app.use('/query', Query);



app.get('/greet', function(req, res, next)
{
      res.send("{Hello}");
})


app.post('/WriteToFs', function(req, res, next)
{

      let file = req.body.DbName;
      file = JSON.parse(req.body.DbName);
      // strip off the data: url prefix to get just the base64-encoded bytes
      //var data = file.replace(/^data:application\/\w+;base64,/, "");
      let length = Buffer.byteLength(file.data, 'base64');
      let buf = Buffer.alloc(length, file.data, 'base64');

      let path = file.path + "/" + file.name;
      //Wfile(path,res,buf)

      fs.writeFile(path, buf, (err) =>
      {
            if (err) throw err;

            console.log('The "data to append" was appended to file!');

      });

      res.end();
})









app.post('/lang', function(req, res, next)
{
      console.log("lang ", lang.LangIni());
      res.send(lang.LangIni())
})



app.post('/modify', function(req, res, next)
{



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

async function Modify(obj, DbName, ID, ID_Value, res)
{

      var table = TableName.ORMTableName(DbName); //Returns the table "function" 

      await table.update(JSON.parse(obj),
      {
            where:
            {
                  [ID]: ID_Value
            }

      }).then(result =>
      {
            console.log("success", JSON.stringify(result, null, 4));
            // sequelize.save();
            res.send('1');
      }).catch(function(err)
      {


            console.log("\x1b[31m", "Error", JSON.stringify(err, null, 4), "\x1b[0m"); //"\x1b[0m" reset //"\x1b[31m" red
            res.send('0');
      })
}





var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443, function()
{
      var host = httpsServer.address().address;
      var port = httpsServer.address().port;
      httpsServer.setTimeout(500000);
      console.log("App Listening at https://%s:%s", host, port);
})
/*
var httpServer = http.createServer( app);
 var server = app.listen(8088,function(){
var host = server.address().address;
var port = server.address().port;
console.log("App Listening at http://%s:%s",host,port);
})*/


//module.exports = { app,httpsServer};
