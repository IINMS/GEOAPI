const  Sequelize  = require('sequelize');
const config = require('./config.json');
var redis = require('redis');
var cacher = require('sequelize-redis-cache');

//const db = {};
/*
const databases = Object.keys(config.databases);
for(let i = 0; i < databases.length; ++i) {
    let database = databases[i];
	
    let dbPath = config.databases[database];
	//console.log(database);
    db[database] = new Sequelize( dbPath.path );
}*/
//console.log(db.Geo);



// Option 1: Passing parameters separately
/*const conn = new Sequelize('tymbakiStage2', 'postgress', '!*Geo1*!', {
  host: '192.168.1.206',
  dialect:  'postgres'
});*/

// Option 2: Passing a connection URI
/*db.Geo
  .authenticate()*/
  
  
//const poi=require('./poi.js')(db.Geo.authenticate(),Sequelize);
	//const Sequelize = require('sequelize');
	//const sequelize = new Sequelize('postgres://postgres:!*Geo1*!@192.168.1.206:5432/tymbakiStage2Forms');
 
    /*Geo.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });*/  
 // const sequelize = new Sequelize('postgres://mapgiseu:b1SJs3t64n@206.189.127.214:5432/mapgiseu_tymbakistage4forms');
  // const sequelize = new Sequelize('postgres://postgres:!*Geo1*!@192.168.1.206:5432/tymbakiStage4Forms');
  var rc = redis.createClient(6379, 'localhost');
  
  //var db = new Sequelize('cache_tester', 'root', 'root', { dialect: 'mysql' });
  rc.on('connect', function () {
    //console.log('\033[31mRedis client connected! \033[0m');red
    console.log('\033[32mRedis client connected!\033[0m');
    
    console.log(`${rc.connected}`);
  });
  
  rc.on('error', function (err) {
    console.log('Something went wrong ' + err);
  })
  
   const sequelize    = new Sequelize('postgres://postgres:!*Geo1*!@192.168.1.206:5432/tymbakiStage4Forms', {
    define: {
        hooks: {
            afterCreate:    (instance, options) => cacheObj.clearCache(options),
            afterDestroy:   (instance, options) => cacheObj.clearCache(options),
            afterUpdate:    (instance, options) => cacheObj.clearCache(options),
            afterSave:      (instance, options) => cacheObj.clearCache(options),
            afterUpsert:    (instance, options) => cacheObj.clearCache(options),
        }
    }
});
var cacheObj = cacher(sequelize, rc)
//const clearCache = function(instance, options) {
//if (instance.constructor.name === 'Session') {
 // console.log('\033[32mclearCache\033[0m');
//return;
//}};


//cacher(sequelize, rc).model(instance.constructor.name)
 
 
 
 
 
 
 
 
 
   // db.Forms.authenticate()
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
   
 // const  POI=require('./poi.js')(db.Geo,Sequelize);
  
  
  
 
  
   
var Geo;
module.exports = { sequelize,Sequelize,rc,cacheObj};
/*
type_acc.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});*/