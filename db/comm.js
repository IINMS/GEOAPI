var connect = require('./connect.js');

//console.log("conn "+connect.Sequelize);
const Sequelize=connect.Sequelize;
const sequelize=connect.sequelize;
const Model=connect.Sequelize.Model;

class Comm extends Model {}
Comm.init({
  // attributes
  

  comm_rel_FID: {
    primaryKey:true,
    type: Sequelize.TEXT,
    allowNull: false
  },
   comm_area_ID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  comm_comp_ID:{
      type: Sequelize.TEXT,
      allowNull: false
  },
  comm_layer_coords:{
     type: Sequelize.GEOMETRY('POINT') ,
      allowNull: false
  },
   comm_comment:{
     type: Sequelize.TEXT,
      allowNull: false,
	  field: 'comm_comment'
  },
  comm_img_rel_path:{
     type: Sequelize.TEXT,
      allowNull: true
  },
   comm_doc_rel_path:{
     type: Sequelize.TEXT,
      allowNull: true
  },
   comm_img_rel_path:{
     type: Sequelize.TEXT,
      allowNull: true
  },
  comm_replace_change:{
     type: Sequelize.DATE,
      allowNull: false
  },
 
  comm_replace_replace:{
     type: Sequelize.DATE,
      allowNull: true
  },
   comm_repair:{
     type: Sequelize.DATE,
      allowNull: true
  },
   comm_tmst_form_entry_change:{
     type: Sequelize.DATE,
      allowNull: true
  },
    comm_tmst_form_last_entry:{
     type: Sequelize.DATE,
      allowNull: true
  },
     comm_date_manuf:{
     type: Sequelize.DATEONLY,
      allowNull: false
  },
    comm_date_placed:{
     type: Sequelize.DATEONLY,
      allowNull: false
  },
    comm_condition:{
     type: Sequelize.TEXT,
      allowNull: false
  },
   comm_matterial:{
     type: Sequelize.TEXT,
      allowNull: false
  },
   comm_make_manuf:{
     type: Sequelize.TEXT,
      allowNull: false
  },
    comm_model:{
     type: Sequelize.TEXT,
      allowNull: false
  },
   comm_dye:{
     type: Sequelize.TEXT,
      allowNull: false
  },
    comm_int_std:{
     type: Sequelize.TEXT,
      allowNull: false
  },
     comm_telem_rel:{
     type: Sequelize.UUID,
      allowNull: false
  },
     comm_coord_rel:{
     type: Sequelize.GEOMETRY('POINT'),
      allowNull: false
  },
     comm_telem_rel:{
     type: Sequelize.UUID,
      allowNull: false
  }
  
}, {
  sequelize,
  modelName: 'comm_',
   freezeTableName: true,
  timestamps:false
  // options
});
 
Comm.getpk=function(){
    return "comm_rel_FID";
  }
 //sequelize.sync(); 

module.exports = { Comm };