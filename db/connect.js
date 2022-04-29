const Sequelize = require('sequelize');



const sequelizeConn = new Sequelize('postgres://postgres:!*Geo1*!@192.168.1.206:5432/tymbakiStage4Forms');

sequelizeConn.authenticate()
      .then(() =>
      {
            console.log('Connection has been established successfully.');
      })
      .catch(err =>
      {
            console.error('Unable to connect to the database:', err);
      });




module.exports = {
      sequelizeConn
};