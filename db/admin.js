const connect = require('./connect.js');
const  seq  = require('sequelize');


const Model = seq.Model;

const sequelize = connect.sequelizeConn;


class Personnel extends Model { }
Personnel.init(
{ 
    pers_ID: {
        type: seq.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
      },
    pers_name:{
        type:seq.TEXT,
         
    },  
    pers_surname:{
        type:seq.TEXT,
         
    },
    pers_AMKA: {
        type: seq.TEXT
        
      },

    pers_hire_date: {
        type: seq.DATE
        
    },
    pers_specialization:{
          type:seq.TEXT,
           
      },
    pers_code:{
        type:seq.TEXT
        
    }
},
{
    sequelize,
    modelName: 'personnel',
    freezeTableName: true,
    timestamps: true,
    createdAt: false,    
  }
);
  Personnel.getpk=function(){
    return "pers_ID";
  }



class WorkingTeam extends Model { }
WorkingTeam.init(

{ 

    working_team_ID: {
        type: seq.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
      },
      working_team_type:{
        type:seq.TEXT,
      //  allowNull: false
        
    },  
    working_team_genre:{
        type:seq.TEXT,
        //allowNull: false
        
    },
    working_team_code:{
        type:seq.TEXT
        
    }

 
},

    {
        sequelize,
        modelName: 'working_team',
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        // options
      },
);
      WorkingTeam.getpk=function(){
        return "working_team_ID";
      }


      
class Tasks extends Model { }
Tasks.init(

{ 

    Task_ID: {
        type: seq.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
      },
      Task_comment:{
        type:seq.TEXT,
      //  allowNull: false
        
    },  
    Task_result:{
        type:seq.TEXT,
        //allowNull: false
        
    },
    Task_not_completed_comment:{
        type:seq.TEXT
        
    },  Task_repeat:{
      type:seq.TEXT
      
  },
  Task_file_path:{
  type:seq.BOOLEAN
  
}
 
},

    {
        sequelize,
        modelName: 'Tasks',
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        // options
      },
);
      Tasks.getpk=function(){
        return "Task_ID";
      }


      module.exports = {Personnel,WorkingTeam ,Tasks };