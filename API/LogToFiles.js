
const express = require('express');
const router = express.Router();

const logAction=require('../Loggers.js');

  
router.post('/Image', function (req, res) {
  logAction.ImageUploadLog.log({
    level: 'info',
    message: req.body.DbName
  });
 
  res.send({ 'test': 'it works!' })
});
  router.post('/File', function (req, res) {
    
    logAction.FileUploadLog.log({
      level: 'info',
      message: req.body.DbName
    });
    res.send({ 'test': 'it works!' })
  });
    router.post('/UserLogin', function (req, res) {
      //console.log(req.body.DbName);
    
      logAction.UserLog.log({
        level: 'info',
        action:'Login',
      //  message: req.body.DbName
        user:req.body.DbName[0]
      });

      

 
      res.send({"ok":""} );
 // res.end()
  //res.send('About birds')
});

router.post('/UserLogOut', function (req, res) {

  logAction.UserLog.log({
    level: 'info',
    action:'LogOut',
  //  message: req.body.DbName
    user:req.body.DbName[0]
  });


  
//res.end();
res.send({"ok":""} );
//res.send('About birds')
});


router.post('/FormLog', function (req, res) {

  //console.log(JSON.stringify(req.body.DbName[1]))
  //console.log(JSON.parse( req.body.DbName[1]));
 
  logAction.Formlog.log({
    level: 'info',
    form: req.body.DbName[2],
    action:'submit',
    user:req.body.DbName[0],
    previousData:req.body.DbName[3],
    data:req.body.DbName[1]
   // message: req.body.DbName,
    
    
  });


  
res.send({"ok":""} )
//res.send('About birds')
});
module.exports = router;