var connect = require('./connect.js');
const  Sequelize  = require('sequelize');

var common = require('./comm.js');
var type1 = require('./type1.js');
var type2 = require('./type2.js');
var type3 = require('./type3.js');
var type4 = require('./type4.js');

var special = require('./special.js');
var association = require('./Associations.js');
var foreignTables = require('./foreignTablesStage4.js');
var composition = require('./Composition.js');
var admin = require('./admin.js');
var special = require('./special.js');

var privil = require('./Privil.js');

//const sequelizeConn=connect.sequelizeConn;
const sequelize=connect.sequelizeConn;
const Model=Sequelize.Model;
//type3.Wmeter.sync({alter: true });

  /*
 type4.MetalBody.sync({force: true })
 type4.FlowMeter.sync({alter: true })

 type4.ElectronicEquipment.sync({alter: true })
 type4.FlowRegulator.sync({alter: true })
 type4.MetalBody.sync({alter: true })*/


//Electric.sync({alter: true });

//special.Electric.sync({alter: true });
//type1.Relvalve.sync({alter: true });
//type2.Evane.sync({alter: true });
//common.Comm.sync({alter: true })

//sequelize.sync({alter: true })
//type2.Evane.sync({alter:true})

 
//type4.FlowMeter.sync({force:true})
//type4.FlowRegulator.sync({force:true})
 
//privil.UserCat.sync({force:true})
//type3.AnalogWmeter.sync({alter: true });

//admin.WorkingTeam.sync({alter: true });

//admin.WorkingTeam.sync({alter: true });

module.exports = { privil};