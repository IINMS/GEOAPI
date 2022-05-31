
/*const typeRules =require('./TypeRules');
const CommRules=require('./CommRules');*/

const ReadFile = require('../ReadFile');
const fs = require('fs');
//var fs = require('fs')







TableRules = function (name) {

    /*var fileNames= ReadDir(language);
    var langObj= ReadFile(fileNames,language);*/

    var CommRulesPath = "Rules/Comm_Rules";
    var typeRulesPath = "Rules/Type_Rules";
    switch (name) {




        case "Comm_":

            return ReadFile.ReadJsonFile(CommRulesPath + "/" + name + ".json");



        case "type_duct":
            // return typeRulesPath .DuctRule;
            return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");



        /* case "type_keyshut":
             ORMequivalent = type1.Keyshut;
 
             break;
 
         case "type_depress":
             ORMequivalent = type1.Depress;
 
             break;
 
         case "type_acc":
             ORMequivalent = type1.Acc;
 
             break;
 
         case "type_relvalve":
             ORMequivalent = type1.Relvalve;
 
             break;*/

        case "type_vane":
            //  return typeRulesPath .VaneRule;

            return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");



        /*  case "type_evane":
              ORMequivalent = type2.Evane;
  
              break;
  
          case "type_airvac":
              ORMequivalent = type2.Airvac;
  
              break;*/

        case "type_evac":
            // return typeRulesPath .DuctRule;

            return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");

        /* case "type_shutter":
             ORMequivalent = type2.Shutter;
 
             break;
 
         case "type_cpoint":
             ORMequivalent = type2.Cpoint;
 
             break;*/

        case "type_tank":
            // return  typeRulesPath .TankRule
            return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");


        /*  case "type_stream":
              ORMequivalent = type3.stream;
  
              break;*/

        case "type_drill":
            //  return typeRulesPath .DrillRule
            return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");

        /*
                case "type_struct":
                    ORMequivalent = type3.Struct;
        
                    break;
        
                case "type_wmeter":
                    ORMequivalent = type3.Wmeter;
        
                    break;
        
                case "type_cpoint":
                    ORMequivalent = type3.Cpoint;
        
                    break;
        
        
                case "spcl_telem":
                    ORMequivalent = special.Telem;
        
                    break;*/





    };



}



module.exports = { TableRules };