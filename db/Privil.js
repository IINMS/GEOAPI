var connect = require('./connect.js');


const Sequelize = connect.Sequelize;
const sequelize = connect.sequelize;
const Model = connect.Sequelize.Model;


class UserCat extends Model { }

UserCat.init({
  ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement:true,
    field: 'ID'
  },
  UserCat: {
    type: Sequelize.TEXT,
    
    allowNull: true,
    field: 'UserCatID'
  },
  RoleOfUser: {
    type: Sequelize.TEXT,
    field: 'UserRole',
    allowNull: true
  },
  Workspace: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    field: 'Workspace',
    allowNull: true
  },
  Preferences: {
    type:  Sequelize.TEXT,
    field: 'Preferences',
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