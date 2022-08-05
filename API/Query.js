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
                        UserRole: cat
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




queryRouter.post('/modifycat', function (req, res, next) {


      console.log("DataObj ", req.body.DataObj);

      console.log("DbName ", req.body.DbName);
      console.log("ID ", req.body.ID);

      var ID = req.body.ID;

      var obj = req.body.DataObj;
      var DbName = req.body.DbName;
      var table = TableName.ORMTableName(DbName); //Returns the table "function" 

      
      let condition = {};
      if (ID) {
            condition['UserRole'] = ID;
      }
      console.log("condition ", condition);

      Modify(obj, table, condition, res);

})




queryRouter.post('/modify', function (req, res, next) {


      console.log("DataObj ", req.body.DataObj);

      console.log("DbName ", req.body.DbName);
      console.log("ID ", req.body.ID);

      console.log("type1 Duct", type1.Duct);

      var ID = req.body.ID;

      var obj = req.body.DataObj;

      var DbName = req.body.DbName;
      var table = TableName.ORMTableName(DbName); //Returns the table "function" 


      var pk = table.getpk();

      let condition = {};
      if (ID) {
            condition[pk] = ID;

 
      }


      Modify(obj, table, condition, res);


})

async function Modify(obj, table, condition, res) {

            console.log(obj);
      await table.update(JSON.parse(obj),
            {
                  where:condition
                 


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

      var table = TableName.ORMTableName(DbName);

      console.log('table',table);


      //  Addition(Ntoadd, DbName, res);

      (async () => {

            try {

                  let dt = await Addition(Ntoadd, table, res);
                  console.log(JSON.stringify(dt, null, 4));

                  res.send('1');

            } catch (err) {

                  res.send('0');
            }

      })()


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
      var table = TableName.ORMTableName(DbName);

      // Addition(Ntoadd, DbName, res);
      (async () => {

            try {

                  let dt = await Addition(Ntoadd, table, res);
                  console.log(JSON.stringify(dt, null, 4));

                  res.send('1');

            } catch (err) {

                  res.send('0');
            }

      })()



})



async function Addition(Ntoadd, table, res) {


      console.log("DataObj ", Ntoadd);
      console.log("table ", table);

      const resData = await table.create(Ntoadd);


      return resData;





}

async function Delete(condition, table) {





      const resData = await table.destroy({
            where: condition

      })

      return resData;





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
      let language = req.body.data;
      console.log(language)
      let langData = lang.LangIni(language);

      res.send(
            {

                  language: langData
            })
})


queryRouter.post('/show', function (req, res, next) { //post request to db for fetching data 



      var data = JSON.parse(req.body.data);

      var id = data['id'];
      var attr = data['attributes'];
      var DbName = data['DbName'];


      console.log(DbName);

      // console.log(attr);

   

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



                        ],




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


            (async () => {

                  let dt = await Show(condition, includes, attributes, table, res);
                  console.log(JSON.stringify(dt, null, 4));

                  res.send({ users: dt });



            })()

      }
})



async function Show(condition, includes, attr, table, res) {


      console.log("condition ",condition)
      console.log("attributes ", attr);

      console.log("includes ", includes);

      const resData = await table.findAll(
            {
                  where: condition,

                  attributes: attr,

                  include: includes






            });


      return resData;


}



queryRouter.post('/collecteurEvanes', function (req, res, next) { //post request to db for fetching data 

      let id = req.body.data;

      let table = type2.Evane;
      console.log(`id ${id}`)
      let fk = table.getfk();
      let condition = {};
      condition[fk] = id;
      let includes = [
            type4.FlowMeter,
            type4.FlowRegulator
      ];

      let attributes = null;



      (async () => {
            try {
                  let dt = await Show(condition, includes, attributes, type2.Evane, res);


                  res.send({ users: dt })





            } catch (err) {

                  console.log(err)
            }

      })()


})


queryRouter.post('/evane', function (req, res, next) { //post request to db for fetching data 

      let data = JSON.parse(req.body.data);
      console.log(`data ${data}`)

      let id = data['id'];
      console.log(`id ${id}`)
      let table = type2.Evane;

      let pk = table.getpk();
      let condition = {};
      if (parseInt(id))
            id = parseInt(id);
      else
            res.send({ users: [] })

      condition[pk] = id;

      let includes = [
            type4.FlowMeter,
            type4.FlowRegulator
      ];

      let attributes = null;



      (async () => {
            let dt = await Show(condition, includes, attributes, type2.Evane, res);
            console.log(JSON.stringify(dt, null, 4));

            if (dt.length != 0) {
                  const obj = JSON.parse(JSON.stringify(dt[0], null, 4));
                  const tempobj = Object.assign({}, obj)
                  delete tempobj.type_flow_meter;
                  delete tempobj.type_flow_regulator;

                  const dataObj = Object.assign(obj.type_flow_regulator, Object.assign(obj.type_flow_meter, tempobj));
                  res.send({ users: [dataObj] })
            } else {
                  res.send({ users: [] })

            }

      })()


})



queryRouter.post('/collecteurWmeters', function (req, res, next) { //post request to db for fetching data 

      let id = req.body.data;

      let table = type3.Wmeter;
      console.log(table);
      let fk = type3.Wmeter.getfk();
      console.log(fk);
      let condition = {};
      condition[fk] = id;
      let includes = null

      let attributes = null;


      (async () => {
            let dt = await Show(condition, includes, attributes, type3.Wmeter, res);
            console.log(JSON.stringify(dt, null, 4));

            res.send({ users: dt })

      })()

})



queryRouter.post('/evaneUpdate', function (req, res, next) { //post request to db for fetching data 

      let id = req.body.ID;
      console.log(id);

      let DataObj = req.body.DataObj;
      DataObj = Object.entries(JSON.parse(DataObj));
      console.log(` new data ${DataObj} `);

      let previousData = req.body.previousData;
      previousData = Object.entries(JSON.parse(previousData));
      console.log(`previous data ${previousData} `);



      let condition = {};


      let table = type2.Evane;
      console.log(table);
      // console.log(DataObj)

      const evaneObj = DataObj.filter(item => item[0].includes('evane_'));
      const flowMeterObj = DataObj.filter(item => item[0].includes('flow_meter_'));
      const flowRegulatorObj = DataObj.filter(item => item[0].includes('flow_regulator_'));

      console.log(Object.fromEntries(evaneObj));
      console.log(Object.fromEntries(flowMeterObj));
      console.log(Object.fromEntries(flowRegulatorObj));


      const evaneObjPreviousValues = previousData.filter(item => item[0].includes('evane_'));
      const flowMeterObjPreviousValues = previousData.filter(item => item[0].includes('flow_meter_'));
      const flowRegulatorObjPreviousValues = previousData.filter(item => item[0].includes('flow_regulator_'));

      console.log(Object.fromEntries(evaneObjPreviousValues));
      console.log(Object.fromEntries(flowMeterObjPreviousValues));
      console.log(Object.fromEntries(flowRegulatorObjPreviousValues));





      (async () => {

            let result1 = null;
            let result2 = null;
            let result3 = null;

            let Evanepk = type2.Evane.getpk()
            let FlowMeterpk = type4.FlowMeter.getpk()
            let FlowRegulatorpk = type4.FlowMeter.getpk()


            try {

                  condition = {};
                  condition[Evanepk] = id;

                  result1 = await update(Object.fromEntries(evaneObj), type2.Evane, condition, res);
                  console.log(` result1 ${result1[0]}`);

                  condition = {};
                  condition[FlowMeterpk] = id;

                  result2 = await update(Object.fromEntries(flowMeterObj), type4.FlowMeter, condition, res);
                  console.log(` result2 ${result2[0]}`);

                  condition = {};
                  condition[FlowRegulatorpk] = id;

                  result3 = await update(Object.fromEntries(flowRegulatorObj), type4.FlowRegulator, condition, res);
                  console.log(` result3 ${result3[0]}`);



                  res.send('1');



            } catch (err) {

                  console.log(err)

                  condition = {};
                  condition[Evanepk] = id;

                  result1 = await update(Object.fromEntries(evaneObjPreviousValues), type2.Evane, condition, res);

                  console.log(result1);


                  condition = {};
                  condition[FlowMeterpk] = id;

                  result2 = await update(Object.fromEntries(flowMeterObjPreviousValues), type4.FlowMeter, condition, res);
                  console.log(` result2 ${result2[0]}`);


                  condition = {};
                  condition[FlowRegulatorpk] = id;

                  result3 = await update(Object.fromEntries(flowRegulatorObjPreviousValues), type4.FlowRegulator, condition, res);
                  console.log(` result3 ${result3[0]}`);

                  res.send('0');


            }




      })()

})




queryRouter.post('/evaneInsert', function (req, res, next) { //post request to db for fetching data 


      let id = req.body.ID;
      console.log(id);



     /* let DataObj = {


            "evane_csection": "2",
            "evane_pmax": "1",
            "evane_tmax": "5",
            "evane_rel_electric": "false",
            "electric_rel_ID": "5",
            "evane_rel_telem": "true",
            "evane_rel_telem_ID": "4",


            "flow_meter_csection": "3.2",
            "flow_meter_measurment_technologies": "",
            "flow_meter_matterial": "tint",
            "flow_meter_type": "",
            "flow_meter_cables_number": "4",
            "flow_meter_measurment_type": "",
            "flow_meter_serial_number": "g",
            "flow_meter_part_number": "lllk",
            "flow_meter_build_date": "2020-06-18T21:00:00.000Z",



            "flow_regulator_matterial": "tint",
            "flow_regulator_csection": "2.6",
            "flow_regulator_serial_number": "125478",
            "flow_regulator_part_number": "5",
            "flow_regulator_volt": "2.3",
            "flow_regulator_enclass": "A++",
            "flow_regulator_build_date": "2018-06-04T21:00:00.000Z"

      }*/

      DataObj = Object.entries(DataObj);

      // let DataObj = req.body.DataObj;

      //  DataObj = Object.entries(JSON.parse(DataObj));



      console.log(` new data ${DataObj} `);

      let previousData = req.body.previousData;
      previousData = Object.entries(JSON.parse(previousData));
      console.log(`previous data ${previousData} `);

      let table = type2.Evane;
      console.log(table);
      // console.log(DataObj)

      let evaneObj = DataObj.filter(item => item[0].includes('evane_'));
      let flowMeterObj = DataObj.filter(item => item[0].includes('flow_meter_'));
      let flowRegulatorObj = DataObj.filter(item => item[0].includes('flow_regulator_'));

      console.log(Object.fromEntries(evaneObj));
      console.log(Object.fromEntries(flowMeterObj));
      console.log(Object.fromEntries(flowRegulatorObj));





      if (Object.keys(evaneObj).length === 0 ||
            Object.keys(flowMeterObj).length === 0 ||
            Object.keys(flowRegulatorObj).length === 0) {

            console.log("empty")
            res.send('0');
      } else

            (async () => {

                  let result1 = null;
                  let result2 = null;
                  let result3 = null;




                  try {
                        result1 = await Addition(Object.fromEntries(evaneObj), type2.Evane, res);

                        console.log(result1['evane_ID']);
                        let evanepk = type2.Evane.getpk();
                        let flowpk = type4.FlowMeter.getpk();
                        let regulatorpk = type4.FlowRegulator.getpk();

                        if (result1) {
                              flowMeterObj = Object.fromEntries(flowMeterObj)
                              flowMeterObj[flowpk] = result1['evane_ID'];
                              console.log(flowMeterObj);

                              result2 = await Addition(flowMeterObj, type4.FlowMeter, res);

                              console.log(` result2 ${result2[0]}`);
                              if (result2) {
                                    flowRegulatorObj = Object.fromEntries(flowRegulatorObj)

                                    flowRegulatorObj[regulatorpk] = result1['evane_ID'];
                                    console.log(flowRegulatorObj);

                                    result3 = await Addition(flowRegulatorObj, type4.FlowRegulator, res);
                                    console.log(` result3 ${result3[0]}`);
                                    if (result3){
                                          res.send('1');
                                    }
                              }

                        }





                     //   res.send('0');



                  } catch (err) {
                        console.log(`Error ${err}`)

                        DeleteEvane(result1['evane_ID'], res)



                  }




            })()


})


async function update(obj, table, condition, res) {


      const result = await table.update(obj,
            {
                  where: condition



            })

      return result;

}


async function DeleteEvane(id, res) {


      let evanepk = type2.Evane.getpk();
      let flowpk = type4.FlowMeter.getpk();
      let regulatorpk = type4.FlowRegulator.getpk();


      try {
            let condition = {};

            condition[evanepk] = id;

            result1 = await Delete(condition, type2.Evane);

            condition = {};
            condition[flowpk] = id;

            result2 = await Delete(condition, type4.FlowMeter);


            condition = {};
            condition[regulatorpk] = id;

            result3 = await Delete(condition, type4.FlowRegulator);

            res.send('0');

      } catch (err) {

            console.log(err)
            res.send('0');
      }

}







module.exports = queryRouter;