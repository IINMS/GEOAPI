const express = require('express');

const queryRouter = express.Router();



const main = require('../db/main.js');
const common = require('../db/comm.js');
const type1 = require('../db/type1.js');
const type2 = require('../db/type2.js');
const type3 = require('../db/type3.js');
const type4 = require('../db/type4.js');

const admin = require('../db/admin.js');


const lang = require('../ReadIni.js');
const TableName = require('../TableName.js');





queryRouter.post('/cat', function (req, res, next) {

      var cat = req.body.Category;


      console.log("cat ", cat);


      main.privil.UserCat.findAll(
            {
                  attributes: ['Workspace'],
                  where:
                  {
                        UserCatID: cat
                  }
            }).then(users => {
                  console.log("All users:", JSON.stringify(users, null, 4));

                  res.send(users)
            })

})

queryRouter.post('/lang', function (req, res, next) {



      console.log("lang ", lang.LangIni());



      res.send(lang.LangIni())
})









queryRouter.post('/modify', function (req, res, next) {


      console.log("DataObj ", req.body.DataObj);

      console.log("DbName ", req.body.DbName);
      console.log("ID ", req.body.ID);

      console.log("type1 Duct", type1.Duct);

      var ID = req.body.ID;

      var obj = req.body.DataObj;

      var DbName = req.body.DbName;


      Modify(obj, DbName, ID, res);


})

async function Modify(obj, DbName, ID, res) {

      var table = TableName.ORMTableName(DbName); //Returns the table "function" 
      var pk = table.getpk();
      console.log(pk);
      await table.update(JSON.parse(obj),
            {
                  where:
                  {
                        [pk]: ID
                  }



            }).then(result => {
                  console.log("success", JSON.stringify(result, null, 4));
                  // sequelize.save();
                  res.send('1');
            }).catch(function (err) {


                  console.log("\x1b[31m", "Error", JSON.stringify(err, null, 4), "\x1b[0m"); //"\x1b[0m" reset //"\x1b[31m" red
                  res.send('0');
            })






}





queryRouter.post('/insert', function (req, res, next) { //post request to db for fetching data 

      var toadd = req.body.DataObj;

      var Ntoadd = JSON.parse(toadd);


      var DbName = req.body.DbName;

      Addition(Ntoadd, DbName, res);


})




queryRouter.post('/addition', function (req, res, next) { //post request to db for fetching data 

      var id = req.body.ID;
      
      var table = TableName.ORMTableName(req.body.DbName);

      console.log("id ", id);

      var toadd = req.body.DataObj;

      var Ntoadd = JSON.parse(toadd);
      var pk = table.getpk();

      //Ntoadd[pk] = id;
      console.log("DataObj ", Ntoadd);


      var DbName = req.body.DbName;
      
      Addition(Ntoadd, DbName, res);




})



async function Addition(Ntoadd, DbName, res) {
      //  console.log("DataObj ", DbName);

      var table = TableName.ORMTableName(DbName);
      //    console.log("DataObj ", table);
    
      await table.create(Ntoadd).then(usersData => {

            console.log("All users:", JSON.stringify(usersData, null, 4));
            // res.send({ users:usersData, language: langData })
      }).then(result => {
            console.log("success", JSON.stringify(result, null, 4));
            // sequelize.save();
            res.send('1'); //1 Success

      }).catch(function (err) {
            //console.log("\x1b[31m", "Error", JSON.stringify(err, null, 4), "\x1b[0m"); //"\x1b[0m" reset //"\x1b[31m" red
            console.log(JSON.stringify(err, null, 4));
            res.send('0'); //0 Error


      })



}


queryRouter.post('/WorkingTeams', function (req, res, next) { //post request to db for fetching data 



      admin.WorkingTeam.findAll(
            {
                  //where: { working_team_ID: '5' },


            }).then(WorkingTeams => {
                  console.log("All users:", JSON.stringify(WorkingTeams, null, 4));
                  res.send(
                        {
                              WorkingTeams
                        })
            })
})

queryRouter.post('/language', function (req, res, next) {
      let language = req.body.DbName;
      console.log(language)
      let langData = lang.LangIni(language);

      res.send(
            {

                  language: langData
            })
})


queryRouter.post('/show', function (req, res, next) { //post request to db for fetching data 

      var data = JSON.parse(req.body.DbName);

      var id = data['id'];
      var attr = data['attributes'];
      var DbName = data['DbName'];

      /* var id = req.body.id;
       var attr = req.body.attributes;
       var DbName = req.body.DbName;*/
      console.log(DbName);

      console.log(attr);


      if (DbName == "comm") {
            common.Comm.findAll(
                  {

                        where:
                        {
                              comm_rel_FID: id
                        },
                        include: [


                              type1.Duct,
                              type1.Keyshut,
                              type1.Depress,
                              type1.Acc,
                              type1.Relvalve,
                              type1.Vane,
                              type2.Evane,
                              type2.Airvac,
                              type2.Evac,
                              type2.Shutter,
                              type2.Cpoint,
                              type3.Tank,
                              type3.Stream,
                              type3.Drill,
                              type3.Wmeter,
                              type4.MetalBody,
                              type4.ElectronicEquipment



                        ]



                  }).then(usersData => {
                        console.log("All users:", JSON.stringify(usersData, null, 4));
                        res.send(
                              {
                                    users: usersData
                              })
                  })
      }
      else {

            console.log("DbName ", DbName);

            let table = TableName.ORMTableName(DbName);
            console.log("table ", table);
            let pk = table.getpk();


            let condition = {};
            if (id) {
                  condition[pk] = id;

                  console.log("condition ", condition);

            }

            let attributes = null;
            if (attr) {
                  attributes = attr;

                  console.log("attributes ", attributes);

            }

            let includes = null;

            Show(condition, includes, attributes, table, res)
      }
})



async function Show(condition, includes, attr, table, res) {



      console.log("attributes ", attr);

      console.log("includes ", includes);

      await table.findAll(
            {
                  where: condition,

                  attributes: attr,

                  includes: includes


            }).then(WorkingTeams => {
                  console.log("All users:", JSON.stringify(WorkingTeams, null, 4));
                  res.send(
                        {
                              users: WorkingTeams

                        })
            })
            .catch(function (err) {
                  console.log(JSON.stringify(err, null, 4));
                  res.send('0'); //0 Error


            })




}



queryRouter.post('/collecteurEvanes', function (req, res, next) { //post request to db for fetching data 

      let id = req.body.DbName;

      let table = type2.Evane;

      let fk = table.getfk();
      let condition = {};
      condition[fk] = id;
      let includes = [
            type4.FlowMeter,
            type4.FlowRegulator
      ];

      let attributes = null;

      Show(condition, includes, attributes, type2.Evane, res)


})


queryRouter.post('/evane', function (req, res, next) { //post request to db for fetching data 

      let id = req.body.DbName;

      let table = type2.Evane;

      let pk = table.getpk();
      let condition = {};
      condition[pk] = id;

      let includes = [
            type4.FlowMeter,
            type4.FlowRegulator
      ];

      let attributes = null;

      Show(condition, includes, attributes, type2.Evane, res)


})



queryRouter.post('/collecteurWmeters', function (req, res, next) { //post request to db for fetching data 

      let id = req.body.DbName;

      let table = type3.Wmeter;
      console.log(table);
      let fk = type3.Wmeter.getfk();
      console.log(fk);
      let condition = {};
      condition[fk] = id;
      let includes = null

      let attributes = null;

      Show(condition, includes, attributes, type3.Wmeter, res)


})



queryRouter.get('/evaneUpdate', function (req, res, next) { //post request to db for fetching data 

      let id = req.query.id;

      let table = type2.Evane;
      console.log(table);






      (async () => {

            let result1 = null;
            let result2 = null;
            let result3 = null;

            result1 = await update({ 'evane_csection': 4 }, type2.Evane, id, res);
            console.log(` result1 ${result1[0]}`);


            if (result1[0]) {
                  result2 = await update({ 'flow_meter_csection': 18 }, type4.FlowMeter, id, res);
                  console.log(` result2 ${result2[0]}`);
            }

            if (result2[0]) {
                  result3 = await update({ 'flow_regulator_csection': 4 }, type4.FlowRegulator, id, res);
                  console.log(` result3 ${result3[0]}`);

            }

            if (result3[0]) {

                  res.send('1');
                  return null;

            }



      })()

})


async function update(obj, table, id, res) {
      let pk = table.getpk();
      const result = await table.update(obj,
            {
                  where:
                  {
                        [pk]: id
                  }


            })

      return result;

}





module.exports = queryRouter;