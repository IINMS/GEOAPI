var connect = require('./connect.js');
var common = require('./comm.js');
var type1 = require('./type1.js');
var type2 = require('./type2.js');
var type3 = require('./type3.js');
var special = require('./special.js');
var Association = require('./Associations.js');
var foreignTables = require('./foreignTablesStage4.js');
 
var privil = require('./Privil.js');

//const Sequelize=connect.Sequelize;
const sequelize=connect.sequelize;
const Model=connect.Sequelize.Model;

 
 
module.exports = { privil};