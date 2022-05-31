const express = require('express');
//const rules = express.Rules();
const rulesRouter = express.Router();
const Rules = require('../Rules/SelectRule.js');
const FieldRules = require('../Rules/SelectFieldRule.js');


rulesRouter.post('/TableRule', function (req, res, next) { // request for fetching only the columns of a table

	var Name = req.body.DbName
	res.send(Rules.TableRules(Name))


})




rulesRouter.post('/FieldRule', function (req, res, next) { // request for fetching only the columns of a table

    var Name = req.body.DbName;
    

	res.send(FieldRules.FieldRules(Name))


})

module.exports = rulesRouter;