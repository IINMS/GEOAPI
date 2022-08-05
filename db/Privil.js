var connect = require('./connect.js');
const  Sequelize  = require('sequelize');


const sequelize= connect.sequelizeConn;
const Model = Sequelize.Model;


class UserCat extends Model { }

UserCat.init({
  ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    field: 'ID'
  },
  UserRole: {
    type: Sequelize.TEXT,
    
    allowNull: true,
  },
  Workspace: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    field: 'Workspace',
    allowNull: true
  }
},
  {
    sequelize,
    modelName: 'usercat',
    freezeTableName: true,
    timestamps: false
    // options
  });
  //UserCat.sync({force:true});
module.exports = { UserCat };