//var another = require('./connect.js');

//const poi=require('./poi.js')(db.Geo.authenticate(),Sequelize);
	const Sequelize = require('sequelize');
	const sequelize = new Sequelize('postgres://guest:guest@192.168.1.206:5432/tymbakiStage2Forms');
// const sequelizeConn = new Sequelize('postgres://postgres:!*Geo1*!@192.168.1.206:5432/tymbakiStage2Forms');
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Model = Sequelize.Model;
  class Comm extends Model {}
Comm.init({
  // attributes
  comm_type_ID: {
    type: Sequelize.INTEGER,
	primaryKey:true,
    allowNull: false
  },
  comm_rel_FID: {
    type: Sequelize.TEXT,
    allowNull: false
  },
   comm_area_ID: {
    type: Sequelize.SMALLINT,
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
      allowNull: false
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
 
class Acc extends Model {}
Acc.init({
  // attributes
  acc_type_ID: {
    type: Sequelize.INTEGER,
	primaryKey:true,
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
  timestamps:false
  // options
});
 
 
 
 
 /* Comm.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});
*/


/*
 another.Tmp.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});*/

// Create a new user
Acc.create({ acc_type_ID: 2,acc_type: "NaN" }).then(acc => {
  console.log("Jane's auto-generated ID:" ,acc);
});

/*const users =  another.User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));*/