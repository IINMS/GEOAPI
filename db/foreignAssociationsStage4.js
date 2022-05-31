/*var connect = require('./connect.js');

var common = require('./comm.js');
 

var foreignTables = require('./foreignTablesStage4.js');

 

const Sequelize=connect.Sequelize;
const sequelize=connect.sequelize;
const Model=connect.Sequelize.Model;

var Comm=common.Comm;



var SECONDARYPIPES=foreignTables.SECONDARYPIPES;
var MAINPIPES=foreignTables.MAINPIPES;
var ANODEPIPES=foreignTables.ANODEPIPES;

var VANES=foreignTables.VANES;
var PUMPHOUSE=foreignTables.PUMPHOUSE;
var TANKS=foreignTables.TANKS;
var KOLEKTER=foreignTables.KOLEKTER;
var DRILL=foreignTables.DRILL;
var BOOSTERS=foreignTables.BOOSTERS;
 
Comm.hasOne(KOLEKTER,{foreignKey: 'objectid' });
KOLEKTER.belongsTo(Comm,{foreignKey: 'objectid'});
*/



	
/*KOLEKTER.belongsTo(
    Comm,
    {
        targetKey: 'comm_type_ID',
        foreignKey: 'objectid',
        
    }
)*/

/*
>>>>>>> e9d2301f4d513b4a81d462272927479db6242b1c
=======
>>>>>>> JoannaPe/tymbakigeo-master
>>>>>>> c404e3ad2164969683e7bc31f3c5589ff494be87
Comm.hasOne(SECONDARYPIPES,{foreignKey: 'objectid' });
SECONDARYPIPES.belongsTo(Comm,{foreignKey: 'objectid'});

Comm.hasOne(MAINPIPES,{foreignKey: 'objectid' });
MAINPIPES.belongsTo(Comm,{foreignKey: 'objectid'});

Comm.hasOne(ANODEPIPES,{foreignKey: 'objectid' });
ANODEPIPES.belongsTo(Comm,{foreignKey: 'objectid'});

Comm.hasOne(VANES,{foreignKey: 'objectid' });
VANES.belongsTo(Comm,{foreignKey: 'objectid'});

Comm.hasOne(PUMPHOUSE,{foreignKey: 'objectid' });
PUMPHOUSE.belongsTo(Comm,{foreignKey: 'objectid'});

Comm.hasOne(TANKS,{foreignKey: 'objectid' });
TANKS.belongsTo(Comm,{foreignKey: 'objectid'});



Comm.hasOne(DRILL,{foreignKey: 'objectid' });
DRILL.belongsTo(Comm,{foreignKey: 'objectid'});

Comm.hasOne(BOOSTERS,{foreignKey: 'objectid' });
BOOSTERS.belongsTo(Comm,{foreignKey: 'objectid'});
 */
//Comm.sync();