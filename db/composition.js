const connect = require('./connect.js');
const  Sequelize  = require('sequelize');


const sequelize=connect.sequelizeConn;
const Model=Sequelize.Model;


class Composition extends Model {}
Composition.init({

    composition_ID: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false


    },

    comp_ID: {
        type: Sequelize.TEXT,
        allowNull: false
    },


    correlation_ID: {
        type: Sequelize.TEXT,
        allowNull: false
    },
      comp_descr: {
        type: Sequelize.TEXT
    }
      



},{

        sequelize,
        modelName: 'composition_',
        freezeTableName: true,
        timestamps:false
      }

);


Composition.getpk=function(){
    return "composition_ID";
  }

 // Composition.sync(); 

module.exports = { Composition };
