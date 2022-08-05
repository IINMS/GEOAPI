var connect = require('./connect.js');
const  Sequelize  = require('sequelize');


const sequelize = connect.sequelizeConn;
const Model = Sequelize.Model;

class Tank extends Model { }
Tank.init({


  tank_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  tank_type: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  tank_capacity: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  tank_length: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  tank_width: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  tank_height: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },

  tank_wall_thick: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  tank_rel_sensors: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  tank_rel_sensors_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  tank_sens_lvl: {
    type: Sequelize.DECIMAL,
    allowNull: true
  },
  tank_rel_FID_alt: {
    type: Sequelize.DECIMAL,
    allowNull: true
  }

}, {
    sequelize,
    modelName: 'type_tank',
    freezeTableName: true,
    timestamps: false
    // options
  }





);

Tank.getpk=function(){
  return "tank_type_ID";
}
Tank.getfk=function(){
  return "tank_type_ID";
}

class Stream extends Model { }
Stream.init({


  stream_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  stream_danger: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  stream_season_max: {
    type: Sequelize.TEXT,
    allowNull: false
  }
},
  {
    sequelize,
    modelName: 'type_stream',
    freezeTableName: true,
    timestamps: false
    // options
  }



);
Stream.getpk=function(){
  return "stream_type_ID";
}
Stream.getfk=function(){
  return "stream_type_ID";
}


class Drill extends Model { }
Drill.init({


  drill_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  drill_depth: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  drill_rel_sensors: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  drill_rel_sensors_ID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  drill_sens_lvl: {
    type: Sequelize.DECIMAL,
    allowNull: true
  },
  drill_capacity: {
    type: Sequelize.DECIMAL,
    allowNull: true
  },
  drill_rel_motor: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },
  drill_rel_motor_ID: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  }

},
  {
    sequelize,
    modelName: 'type_drill',
    freezeTableName: true,
    timestamps: false
    // options
  }




);

Drill.getpk=function(){
  return "drill_type_ID";
}
Drill.getfk=function(){
  return "drill_type_ID";
}

class Struct extends Model { }
Struct.init({
  // attributes

  struct_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  struct_usage: {
    type: Sequelize.TEXT,
    allowNull: false
  }


}, {
    sequelize,
    modelName: 'type_struct',
    freezeTableName: true,
    timestamps: false
    // options
  },



);

Struct.getpk=function(){
  return "struct_type_ID";
}
Struct.getfk=function(){
  return "struct_type_ID";
}

class Wmeter extends Model { }
Wmeter.init({
  // attributes
  wmeter_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  wmeter_type_ID: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  wmeter_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },

  wmeter_pmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  wmeter_rel_telem: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  wmeter_rel_telem_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  wmeter_rel_sensors: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  wmeter_rel_sensors_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
  }/*,
  wmeter_serial_number: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  wmeter_part_number: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  wmeter_make_manuf: {
    type: Sequelize.INTEGER,
    allowNull: true
  }*/


}, {
    sequelize,
    modelName: 'type_wmeter',
    freezeTableName: true,
    timestamps: false
    // options
  },






);

Wmeter.getpk=function(){
  return "wmeter_ID";
}

Wmeter.getfk=function(){
  return "wmeter_type_ID";
}
 
module.exports = { Tank, Stream, Drill, Struct, Wmeter };