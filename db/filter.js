const connect = require('./connect.js');
const  seq  = require('sequelize');

const Model = seq.Model;

const sequelize = connect.sequelizeConn;

class Filter extends Model { }
Filter.init(
{ 
    filterid: {
        type: seq.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
      },
      username:{
        type:seq.TEXT,
        allowNull: false
         
    },  
    filtername:{
        type:seq.TEXT,
        allowNull: false
         
    },
    data: {
        type: seq.JSON,
        allowNull: true
        
      },
      labelId_array: {
        type: seq.ARRAY(seq.TEXT),
        allowNull: false
        //defaultValue: []
        
      }
},
{
    sequelize,
    modelName: 'filter',
    freezeTableName: true,
    timestamps: true,
    createdAt: false,    
  }
);
  Filter.getpk=function(){
    return "filterid";
  }
  module.exports = { Filter };

 // sequelize.sync({alter: true })
  Filter.sync().then(
    () => console.log("Sync complete")
  );