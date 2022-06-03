const  Sequelize  = require('sequelize');
const config = require('./config.json');
var redis = require('redis');
var cacher = require('sequelize-redis-cache');


  var rc = redis.createClient(6379, 'localhost');
  
  //var db = new Sequelize('cache_tester', 'root', 'root', { dialect: 'mysql' });
  rc.on('connect', function () {
    console.log('\033[32mRedis client connected!\033[0m');
    
    console.log(`${rc.connected}`);
  });
  
  rc.on('error', function (err) {
    console.log('Something went wrong ' + err);
  })
  
   const sequelizeConn    = new Sequelize('postgres://postgres:!*Geo1*!@192.168.1.206:5432/tymbakiStage4Forms', {
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
var cacheObj = cacher(sequelizeConn, rc)
//const clearCache = function(instance, options) {
//if (instance.constructor.name === 'Session') {
 // console.log('\033[32mclearCache\033[0m');
//return;
//}};


//cacher(sequelize, rc).model(instance.constructor.name)
 
 
 
 
 
 
 
 
 
   // db.Forms.authenticate()
   sequelizeConn.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
   
 // const  POI=require('./poi.js')(db.Geo,Sequelize);
  
  
  
 
  
   
var Geo;
module.exports = { sequelizeConn,Sequelize,rc,cacheObj};
/*
type_acc.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});*/
