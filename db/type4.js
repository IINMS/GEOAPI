const connect = require('./connect.js');



const Sequelize = require('sequelize');


const sequelize = connect.sequelizeConn;
const Model = Sequelize.Model;

class ElectronicEquipment extends Model { }
ElectronicEquipment.init(

  {
    elec_equip_type_ID: {
      type: Sequelize.TEXT,
      primaryKey: true,
      allowNull: false
    },

    elec_equip_solarpanel: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    elec_equip_battery: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    elec_equip_arduino: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    elec_equip_raspberrypi: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    elec_equip_lora_module: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    elec_equip_serial_number: {
      type: Sequelize.TEXT,
    },
    elec_equip_part_number: {
      type: Sequelize.TEXT,
    }



  },

  {
    sequelize,
    modelName: 'type_elec_equip',
    freezeTableName: true,
    timestamps: false
    // options
  }


)

ElectronicEquipment.getpk = function () {
  return "elec_equip_type_ID";
}

ElectronicEquipment.getfk=function(){
  return "elec_equip_type_ID";
}

/*
  class WmeterEvane extends Model { }
  WmeterEvane.init({
  // attributes
 
  wmeter_evane_type_ID: {
    type: Sequelize.TEXT,
  primaryKey: true,
    allowNull: false
  },
  wmeter_evane_csection: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  wmeter_evane_pmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  wmeter_evane_tmax: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  wmeter_evane_rel_electric: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  wmeter_evane_rel_electric_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  wmeter_evane_rel_telem: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  wmeter_evane_rel_telem_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
  }

}, {
    sequelize,
    modelName: 'type_wmeter_evane',
    freezeTableName: true,
    timestamps: false
    // options
  }




  );

  WmeterEvane.getpk=function(){
    return "evane_type_ID";
  }*/


class FlowMeter extends Model { }
FlowMeter.init({
  flow_meter_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  flow_meter_csection: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_meter_measurment_technologies: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_meter_matterial: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_meter_type: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_meter_cables_number: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_meter_measurment_type: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_meter_serial_number: {
    type: Sequelize.TEXT,
  },

  flow_meter_part_number: {
    type: Sequelize.TEXT,
  },
  flow_meter_build_date: {
    type: Sequelize.DATE,
    allowNull: false
  }

},

  {
    sequelize,
    modelName: 'type_flow_meter',
    freezeTableName: true,
    timestamps: false
    // options
  }
);

FlowMeter.getpk = function () {
  return "flow_meter_type_ID";
}

class FlowRegulator extends Model { }
FlowRegulator.init({
  flow_regulator_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },
  flow_regulator_matterial: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_regulator_csection: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_regulator_serial_number: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_regulator_part_number: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_regulator_volt: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_regulator_enclass: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  flow_regulator_build_date: {
    type: Sequelize.DATE,
    allowNull: false
  },

},

  {
    sequelize,
    modelName: 'type_flow_regulator',
    freezeTableName: true,
    timestamps: false
    // options
  }
);

FlowRegulator.getpk = function () {
  return "flow_regulator_type_ID";
}

class MetalBody extends Model { }
MetalBody.init({
  metal_body_type_ID: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false
  },

  metal_body_matterial: {
    type: Sequelize.TEXT,
    allowNull: false
  },

  metal_body_receptors: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  metal_body_inlet_csection: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  metal_body_output_csection: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  metal_body_serial_number: {
    type: Sequelize.TEXT,
  },

  metal_body_part_number: {
    type: Sequelize.TEXT,
  },
  metal_body_build_date: {
    type: Sequelize.DATE,
    allowNull: false
  },


},

  {
    sequelize,
    modelName: 'type_metal_body',
    freezeTableName: true,
    timestamps: false
    // options
  }
);

MetalBody.getpk = function () {
  return "metal_body_type_ID";
}

//FlowRegulator.sync({ force: true });
//FlowMeter.sync({ alter: true });


module.exports = { ElectronicEquipment, FlowRegulator, MetalBody, FlowMeter };