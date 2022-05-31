
/*const typeRules =require('./TypeRules');
const CommRules=require('./CommRules');*/

const ReadFile = require('../ReadFile');
const fs = require('fs');
//var fs = require('fs')







FieldRules = function (name) {

    /*var fileNames= ReadDir(language);
    var langObj= ReadFile(fileNames,language);*/

    var FieldRulesPath = "Rules/Field_Rules";
    var code = name.substring(0, 2);
    var FieldName = name.substring(3, name.length);
    console.log(FieldName);
    //var typeRulesPath="Rules/Type_Rules";
    var file;
    switch (code) {




        case "00":

            file = ReadFile.ReadJsonFile(FieldRulesPath + "/" + "Textfield.json");
            return file[FieldName];

        case "11":

            file = ReadFile.ReadJsonFile(FieldRulesPath + "/" + "Filefield.json");
            return file[FieldName];

        case "01":

            file = ReadFile.ReadJsonFile(FieldRulesPath + "/" + "Datefield.json");
            return file[FieldName];

        case "02":

            file = ReadFile.ReadJsonFile(FieldRulesPath + "/" + "Numberfield.json");
            return file[FieldName];


        case "03":

            file = ReadFile.ReadJsonFile(FieldRulesPath + "/" + "Fieldcontainer.json");
            return file[FieldName];


    };



}









module.exports = { FieldRules };