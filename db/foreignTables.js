var connect = require('./connect.js');


//const Sequelize=connect.Sequelize;
const sequelize=connect.sequelize;
const Model=connect.Sequelize.Model;

 /*
  class POI extends Model {}
 POI.init({
  // attributes
  gid: {
    type: Sequelize.INTEGER,
	primaryKey:true,
    allowNull: false
  },
  name: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   folderpath: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   snippet: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   popupinfo: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   labelid: {
    type: Sequelize.BIGINT
    // allowNull defaults to true
  },
   area: {
    type: Sequelize.CHAR(50)
    // allowNull defaults to true
  },
   areaid: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  },
   munid: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  },
  munareaid: {
    type: Sequelize.SMALLINT
    // allowNull defaults to true
  },
  munareaid: {
    type: Sequelize.SMALLINT
    // allowNull defaults to true
  },
   munareaid: {
    type: Sequelize.GEOMETRY('POINT', 4121)
    // allowNull defaults to true
  }
}, {
   
  sequelize,
  modelName: 'pois_stage2',
  freezeTableName: true,
  timestamps:false,
  schema:'pois'
  // options
});
  class PIPELINE extends Model {}
 PIPELINE.init({
  // attributes
  gid: {
    type: Sequelize.INTEGER,
	primaryKey:true,
    allowNull: false
  },
  name: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   folderpath: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   snippet: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   popupinfo: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   labelid: {
    type: Sequelize.BIGINT
    // allowNull defaults to true
  },
   area: {
    type: Sequelize.CHAR(50)
    // allowNull defaults to true
  },
   areaid: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  },
   munid: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  },
  munareaid: {
    type: Sequelize.SMALLINT
    // allowNull defaults to true
  },
  munareaid: {
    type: Sequelize.SMALLINT
    // allowNull defaults to true
  },
   munareaid: {
    type: Sequelize.GEOMETRY('POINT', 4121)
    // allowNull defaults to true
  }
}, {
   
  sequelize,
  modelName: 'pipelines_stage2',
  freezeTableName: true,
  timestamps:false,
  schema:'pois'
  // options
});

  module.exports = { POI ,PIPELINE};
  
  */