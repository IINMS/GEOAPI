var connect = require('./connect.js');

const  Sequelize  = require('sequelize');

const sequelize = connect.sequelizeConn;
const Model = Sequelize.Model;

class Duct extends Model { }
Duct.init({
  // attributes
  duct_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },

  duct_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  duct_depth: {
    type: Sequelize.SMALLINT,
    allowNull: false
  }
}, {
    sequelize,
    modelName: 'type_duct',
    freezeTableName: true,
    timestamps: false
    // options
  }

  


);

Duct.getpk=function(){
  return "duct_type_ID";
}
Duct.getfk=function(){
  return "duct_type_ID";
}

class Keyshut extends Model { }
Keyshut.init({
  // attributes

  keyshut_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  keyshut_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  keyshut_depth: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  keyshut_rel_electric: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },
  electric_rel_ID: {
    type: Sequelize.INTEGER,
    allowNull: true,
    unique:true
  }
}, {
    sequelize,
    modelName: 'type_keyshut',
    freezeTableName: true,
    timestamps: false
    // options
  } 
  );
  
  Keyshut.getpk=function(){
    return "keyshut_type_ID";
  }
  Keyshut.getfk=function(){
    return "keyshut_type_ID";
  }

class Depress extends Model { }
Depress.init({
  // attributes
  depress_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },

  depress_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  depress_electric: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  }
}, {
    sequelize,
    modelName: 'type_depress',
    freezeTableName: true,
    timestamps: false
    // options
  } 
);

Depress.getpk=function(){
  return "depress_type_ID";
}
Depress.getfk=function(){
  return "depress_type_ID";
}

class Acc extends Model { }
Acc.init({
  // attributes

  acc_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  acc_type: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
    sequelize,
    modelName: 'type_acc',
    freezeTableName: true,
    timestamps: false
    // options
  } 
  );

  Acc.getpk=function(){
    return "acc_type_ID";
  }
  Acc.getfk=function(){
    return "acc_type_ID";
  }



 
class Relvalve extends Model { }
Relvalve.init({

  relvalve_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  relvalve_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  relvalve_pmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  relvalve_tmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  relvalve_plunger: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  relvalve_rel_electric: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  electric_rel_ID: {
    type: Sequelize.INTEGER,
    allowNull: true,
    unique:true
  },
  relvalve_rel_pilot: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  relvalve_em_valve: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
    sequelize,
    modelName: 'type_relvalve',
    freezeTableName: true,
    timestamps: false
  } 


);

Relvalve.getpk=function(){
  return "relvalve_type_ID";
}
Relvalve.getfk=function(){
  return "relvalve_type_ID";
}
 

class Vane extends Model {
 


 }
Vane.init({
  // attributes

  vane_type_ID: {
  
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false

  }
  ,
  vane_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  vane_pmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  vane_tmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  vane_thread: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  vane_flange: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  vane_screw: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  vane_cousine: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  vane_block: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  vane_pos_mark: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
    sequelize,
    modelName: 'type_vane',
    freezeTableName: true,
    timestamps: false
    // options
  } 
  );

  Vane.getpk=function(){
     return "vane_type_ID";
  }
  Vane.getfk=function(){
    return "vane_type_ID";
 }
 //Vane.sync();

module.exports = { Duct, Keyshut, Depress, Acc, Relvalve, Vane };
 
