var connect = require('./connect.js');
const  Sequelize  = require('sequelize');

var common = require('./comm.js');

var type1 = require('./type1.js');
var type2 = require('./type2.js');
var type3 = require('./type3.js');

 

var special = require('./special.js');


//const sequelize=connect.sequelizeConnConn;
const Model=Sequelize.Model;

var Comm=common.Comm;

var Duct=type1.Duct; 
var Keyshut=type1.Keyshut; 
var Depress=type1.Depress;
var Acc=type1.Acc; 
var Relvalve=type1.Relvalve; 
var Vane=type1.Vane; 

var Evane=type2.Evane; 
var Airvac=type2.Airvac;
var Evac=type2.Evac; 
var Shutter=type2.Shutter; 
var Cpoint=type2.Cpoint; 

var Tank=type3.Tank; 
var Stream=type3.Stream;
var Drill=type3.Drill; 
var Struct=type3.Struct; 
var Wmeter=type3.Wmeter; 

var Electric=special.Electric;
var Telemetry=special.Telemetry;
var Sensors=special.Sensors;
var Motor=special.Motor;
var GPS=special.GPS;

 



 
Comm.hasOne(Keyshut,{foreignKey: 'keyshut_type_ID'}); 
Keyshut.belongsTo(Comm,{ foreignKey: 'keyshut_type_ID'});

Comm.hasOne(Depress,{foreignKey: 'depress_type_ID'}); 
Depress.belongsTo(Comm,{  foreignKey: 'depress_type_ID'});

Comm.hasOne(Acc,{foreignKey: 'acc_type_ID'}); 
Acc.belongsTo(Comm,{  foreignKey: 'acc_type_ID'});

Comm.hasOne(Relvalve,{foreignKey: 'relvalve_type_ID'}); 
Relvalve.belongsTo(Comm,{  foreignKey: 'relvalve_type_ID'});

Comm.hasOne(Vane,{foreignKey: 'vane_type_ID'}); 
Vane.belongsTo(Comm,{  foreignKey: 'vane_type_ID'});
 
Comm.hasOne(Evane,{foreignKey: 'evane_type_ID'}); 
Evane.belongsTo(Comm,{  foreignKey: 'evane_type_ID'});

Comm.hasOne(Airvac,{foreignKey: 'airvac_type_ID'}); 
Airvac.belongsTo(Comm,{  foreignKey: 'airvac_type_ID'});

Comm.hasOne(Evac,{foreignKey: 'evac_type_ID'}); 
Evac.belongsTo(Comm,{  foreignKey: 'evac_type_ID'});

Comm.hasOne(Shutter,{foreignKey: 'shutter_type_ID'}); 
Shutter.belongsTo(Comm,{  foreignKey: 'shutter_type_ID'});

Comm.hasOne(Cpoint,{foreignKey: 'cpoint_type_ID'}); 
Cpoint.belongsTo(Comm,{  foreignKey: 'cpoint_type_ID'});
 
Comm.hasOne(Tank,{foreignKey: 'tank_type_ID'}); 
Tank.belongsTo(Comm,{  foreignKey: 'tank_type_ID'});

Comm.hasOne(Stream,{foreignKey: 'stream_type_ID'}); 
Stream.belongsTo(Comm,{  foreignKey: 'stream_type_ID'});

Comm.hasOne(Drill,{foreignKey: 'drill_type_ID'}); 
Drill.belongsTo(Comm,{  foreignKey: 'drill_type_ID'});

/*Comm.hasOne(Struct,{foreignKey: 'struct_type_ID'}); 
Struct.belongsTo(Struct,{  foreignKey: 'struct_type_ID'});*/

Comm.hasOne(Wmeter,{foreignKey: 'wmeter_type_ID'}); 
Wmeter.belongsTo(Comm,{  foreignKey: 'wmeter_type_ID'});

Comm.hasOne(Duct,{foreignKey: 'duct_type_ID',sourcekey: 'comm_ID'});
Duct.belongsTo(Comm,{ foreignKey: 'duct_type_ID'});

/*

Comm.hasOne(Telemetry,{foreignKey: 'comm_telem_rel'}); 
Telemetry.belongsTo(Comm,{foreignKey: 'comm_telem_rel'});

Comm.hasOne(GPS,{foreignKey: 'comm_coord_rel'}); 
GPS.belongsTo(Comm,{foreignKey: 'comm_coord_rel'});

Comm.hasOne(Sensors,{foreignKey: 'comm_sens_rel'}); 
Sensors.belongsTo(Comm,{foreignKey: 'comm_sens_rel'});

*/


/*
Comm.belongsToMany(Electric, { through: 'User_Profiles',foreignKey:'comm_rel_FID' });
Electric.belongsToMany(Comm, { through: 'User_Profiles',foreignKey:'electric_rel_ID' });
*/


/*
Evane.belongsToMany(Electric, { through: 'User_Profiles',foreignKey:'evane_type_ID' });
Electric.belongsToMany(Evane, { through: 'User_Profiles',foreignKey:'electric_rel_ID' });
*/




Comm.hasOne(Electric,{foreignKey: 'elec_ID',}); 
Electric.belongsTo(Comm,{foreignKey: 'elec_ID'});



//Evane.hasOne(Electric,{foreignKey: 'electric_rel_ID',sourceKey:'electric_rel_ID'}); 
//Electric.belongsTo(Evane,{foreignKey: 'electric_rel_ID'});



/*
Keyshut.hasMany(Electric,{foreignKey: 'electric_rel_ID',sourceKey:'electric_rel_ID'}); 
Electric.belongsTo(Keyshut,{foreignKey: 'electric_rel_ID'});
*/


/*
Relvalve.hasOne(Electric,{foreignKey: 'relvalve_rel_electric_id'}); 
Electric.belongsTo(Relvalve,{foreignKey: 'relvalve_electric_id'});

Evane.hasOne(Electric,{foreignKey: 'evane_electric_id'}); 
Electric.belongsTo(Evane,{foreignKey: 'evane_electric_id'});

Evane.hasOne(Telemetry,{foreignKey: 'evane_telem_id'}); 
Telemetry.belongsTo(Evane,{foreignKey: 'evane_telem_id'});

Wmeter.hasOne(Telemetry,{foreignKey: 'wmeter_telem_id'}); 
Telemetry.belongsTo(Wmeter,{foreignKey: 'Wmeter_telem_id'});

Tank.hasOne(Sensors,{foreignKey: 'tank_sensors_id'}); 
Sensors.belongsTo(Tank,{foreignKey: 'tank_sensors_id'});

Wmeter.hasOne(Sensors,{foreignKey: 'wmeter_sensors_id'}); 
Sensors.belongsTo(Wmeter,{foreignKey: 'wmeter_sensors_id'});

Drill.hasOne(Motor,{foreignKey: 'drill_motor_id'}); 
Motor.belongsTo(Drill,{foreignKey: 'drill_motor_id'});

Electric.hasOne(Telemetry,{foreignKey: 'elec_telelm_id'}); 
Telemetry.belongsTo(Electric,{foreignKey: 'elec_telelm_id'});

Telemetry.hasOne(GPS,{foreignKey: 'telelm_GPS_ID'}); 
GPS.belongsTo(Telemetry,{foreignKey: 'telelm_GPS_ID'});

Telemetry.hasOne(Sensors,{foreignKey: 'telelm_sensoros_ID'}); 
Sensors.belongsTo(Telemetry,{foreignKey: 'telelm_sensoros_ID'});*/
 
//sequelize.sync({force:true});
  
 // sequelize.sync();
 
   
 
/* 
Comm.findAll( {include: [Acc,Relvalve,Vane,Relvalve,Vane]} ).then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
})


*/

 

 /*sequelize.query("select * from pois.pois_stage2 ").then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
}) */
/*
Comm.findAll( {include: [Duct]} ).then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
})
*/
/*Tank.findAll( {include: [Comm]} ).then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
})*/
/*
Sensors.findAll( {include: [Wmeter,Tank]} ).then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
})*/
/*
Electric.findAll( {include: [Telemetry]} ).then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
})*/
/*Electric.findAll( {include: [Telemetry]} ).then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
})*/
/*
Telemetry.findAll( {include: [GPS,Sensors,Electric]} ).then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
})*/
/*
var res=  Comm.findAll({include:[Keyshut]});

console.log("All users:", JSON.stringify(res, null, 4));
*/
