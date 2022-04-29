var connect = require('./connect.js');

const  Sequelize  = require('sequelize');

 const sequelize = connect.sequelizeConn;
const Model = Sequelize.Model;

class Evane extends Model { }
Evane.init({
  // attributes
 
  evane_type_ID: {
    type: Sequelize.TEXT,
	  primaryKey: true,
    allowNull: false
  },
  evane_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  evane_pmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  evane_tmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  evane_rel_electric: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  electric_rel_ID: {
    type: Sequelize.INTEGER,
    allowNull: true,
    unique:true
  },
  evane_rel_telem: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  evane_rel_telem_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
  }/*,
  evane_rel_serial_number: {
    type: Sequelize.TEXT,
   },
   evane_rel_part_number: {
    type: Sequelize.TEXT,
   }*/

}, {
    sequelize,
    modelName: 'type_evane',
    freezeTableName: true,
    timestamps: false
    // options
  }




  );

  Evane.getpk=function(){
    return "evane_type_ID";
  }


class Airvac extends Model { }
Airvac.init({

  airvac_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  airvac_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  airvac_pmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  airvac_tmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  airvac_thread: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  airvac_flange: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  airvac_action: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }

}, {
  sequelize,
    modelName: 'type_airvac',
    freezeTableName: true,
    timestamps: false
   } 

);

Airvac.getpk=function(){
  return "airvac_type_ID";
}

class Evac extends Model { }
Evac.init({
  // attributes
  
  evac_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  evac_type: {
    type: Sequelize.TEXT,
    allowNull: false
  }


}, {
  sequelize,
    modelName: 'type_evac',
    freezeTableName: true,
    timestamps: false
    // options
  } 
  
  );

  Evac.getpk=function(){
    return "evac_type_ID";
  }
  

class Shutter extends Model { }
Shutter.init({
  // attributes
  
  shutter_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  shutter_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },

  shutter_pmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  shutter_tmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  shutter_thread: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  shutter_flange: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  shutter_screw: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  shutter_cousin: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  shutter_bbody: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  shutter_pos_mark: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }


}, {
  sequelize,
    modelName: 'type_shutter',
    freezeTableName: true,
    timestamps: false
    // options
  }



);

Shutter.getpk=function(){
  return "shutter_type_ID";
}


class Cpoint extends Model { }
Cpoint.init({
   
  cpoint_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  cpoint_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },

  cpoint_pmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  cpoint_tmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  cpoint_pos_slimit: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  cpoint_pos_plimit: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  cpoint_conn_type: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  cpoint_frost_prot: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  cpoint_mpiece: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }


}, {
    sequelize,
    modelName: 'type_cpoint',
    freezeTableName: true,
    timestamps: false
   }


);

Cpoint.getpk=function(){
  return "cpoint_type_ID";
}

//sequelize.sync({ force: true });

module.exports = { Evane, Airvac, Evac, Shutter, Cpoint };