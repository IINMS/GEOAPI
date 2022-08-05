const common = require('./db/comm.js');
const foreign = require('./db/foreignTablesStage4.js');
const type1 = require('./db/type1.js');
const type2 = require('./db/type2.js');
const type3 = require('./db/type3.js');
const type4 = require('./db/type4.js');

const special = require('./db/special.js');
const admin = require('./db/admin.js');
const filter = require('./db/filter.js');
const privil = require('./db/Privil.js');

ORMTableName = function (tableName) {


      var ORMequivalent = null;

      switch (tableName) {

            case "valves_with_rel_id":

                  ORMequivalent = foreign.VANES;
                  break;
            case "anode_pipelines_with_rel_id":

                  ORMequivalent = foreign.ANODEPIPES;
                  break;
            case "primary_pipelines_with_rel_id":

                  ORMequivalent = foreign.MAINPIPES;
                  break;
            case "secondary_pipelines_with_rel_id":

                  ORMequivalent = foreign.SECONDARYPIPES;
                  break;
            case "drills_with_rel_id":

                  ORMequivalent = foreign.DRILL;
                  break;
            case "tanks_with_rel_id":

                  ORMequivalent = foreign.TANKS;
                  break;
            case "pumpstations_with_rel_id":

                  ORMequivalent = foreign.PUMPHOUSE;
                  break;
            case "boosters_with_rel_id":

                  ORMequivalent = foreign.BOOSTERS;
                  break;
            case "collecteur_with_rel_id":

                  ORMequivalent = foreign.KOLEKTER;
                  break;
            case "comm_":
            case "collecteur":
                  ORMequivalent = common.Comm;
                  break;

            case "type_duct":
                  ORMequivalent = type1.Duct;

                  break;

            case "type_keyshut":
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

                  break;

            case "type_vane":
                  ORMequivalent = type1.Vane;

                  break;

            case "type_evane":
                  ORMequivalent = type2.Evane;

                  break;

            case "type_airvac":
                  ORMequivalent = type2.Airvac;

                  break;

            case "type_evac":
                  ORMequivalent = type2.Evac;

                  break;

            case "type_shutter":
                  ORMequivalent = type2.Shutter;

                  break;

            case "type_cpoint":
                  ORMequivalent = type2.Cpoint;

                  break;

            case "type_tank":
                  ORMequivalent = type3.Tank;

                  break;

            case "type_stream":
                  ORMequivalent = type3.Stream;

                  break;

            case "type_drill":
                  ORMequivalent = type3.Drill;

                  break;

            case "type_struct":
                  ORMequivalent = type3.Struct;

                  break;

            case "type_wmeter":
                  ORMequivalent = type3.Wmeter;

                  break;

            case "type_cpoint":
                  ORMequivalent = type2.Cpoint;

                  break;


            case "spcl_telem":
                  ORMequivalent = special.Telemetry;

                  break;

            case "spcl_GPS":
                  ORMequivalent = special.GPS;

                  break;

            case "spcl_sensors":
                  ORMequivalent = special.Sensors;

                  break;

            case "spcl_alert":
                  ORMequivalent = special.Alerting;

                  break;

            case "spcl_motor":
                  ORMequivalent = special.Motor;

                  break;

            case "personnel":

                  ORMequivalent = admin.Personnel;

                  break;


            case "working_team":
                  ORMequivalent = admin.WorkingTeam;

                  break;

            case "Tasks":
                  ORMequivalent = admin.Tasks;

                  break;

            case "filter":
                  ORMequivalent = filter.Filter
                  break;


            case "type_elec_equip":
                  ORMequivalent = type4.ElectronicEquipment;

                  break;


            case "type_metal_body":
                  ORMequivalent = type4.MetalBody;

                  break;
            case "type_flow_meter":
                  ORMequivalent = type4.FlowMeter;

                  break;
            case "type_flow_regulator":
                  ORMequivalent = type4.FlowRegulator;

                  break;


            case "usercat":
                  ORMequivalent = privil.UserCat;

                  break;


      }
      //console.log("ORMequivalent "+ORMequivalent);
      return ORMequivalent;

}


module.exports = {
      ORMTableName
}
