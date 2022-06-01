/*var connect = require('./connect.js');


const sequelizeConn=connect.sequelizeConn;
const sequelizeConn=connect.sequelizeConn;
const Model=connect.sequelizeConn.Model;

 
  class ANODEPIPES extends Model {}
  ANODEPIPES.init({
  // attributes
  gid: {
    type: Sequelize.INTEGER,
	  primaryKey:true,
    allowNull: false
  },
  objectid: {
    type: Sequelize.BIGINT

  },
  name: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   folderpath: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   snippet: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   popupinfo: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
  shape_leng: {
    type: Sequelize.FLOAT(10,10)
    // allowNull defaults to true
  },
 
   area: {
    type: Sequelize.CHAR(50)
    // allowNull defaults to true
  },
  

   munid: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  },
  munareaid: {
    type: Sequelize.SMALLINT
    // allowNull defaults to true
  },
  labelid: {
    type: Sequelize.BIGINT
    // allowNull defaults to true
  },
  areaid: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  },
 
   geom: {
    type: Sequelize.GEOMETRY('MULTILINESTRING', 4121)
    // allowNull defaults to true
  }
}, {
   
  sequelize,
  modelName: 'anode_pipelines_with_rel_id',
  freezeTableName: true,
  timestamps:false,
  schema:'pois'
  // options
});

 class BOOSTERS extends Model {}
 BOOSTERS.init({
  // attributes
  gid: {
    type: Sequelize.INTEGER,
  	primaryKey:true,
    allowNull: false
  },
  objectid: {
    type: Sequelize.BIGINT

  },
  name: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   folderpath: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   snippet: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   popupinfo: {
    type: Sequelize.CHAR(254)
    // allowNull defaults to true
  },
   labelid: {
    type: Sequelize.BIGINT
    // allowNull defaults to true
  },
   area: {
    type: Sequelize.CHAR(50)
    // allowNull defaults to true
  },
   areaid: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  },
   munid: {
    type: Sequelize.INTEGER
    // allowNull defaults to true
  },
  munareaid: {
    type: Sequelize.SMALLINT
    // allowNull defaults to true
  },
 
   geom: {
    type: Sequelize.GEOMETRY('POINTZM', 4121)
    // allowNull defaults to true
  }
}, {
   
  sequelize,
  modelName: 'boosters_with_rel_id',
  freezeTableName: true,
  timestamps:false,
  schema:'pois'
  // options
});

class DRILL extends Model {}
DRILL.init({
 // attributes
 gid: {
   type: Sequelize.INTEGER,
   primaryKey:true,
   allowNull: false
 },
 objectid: {
   type: Sequelize.BIGINT

 },
 name: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  folderpath: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  snippet: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  popupinfo: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  labelid: {
   type: Sequelize.BIGINT
   // allowNull defaults to true
 },
  area: {
   type: Sequelize.CHAR(50)
   // allowNull defaults to true
 },
  areaid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
  munid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
 munareaid: {
   type: Sequelize.SMALLINT
   // allowNull defaults to true
 },

  geom: {
   type: Sequelize.GEOMETRY('POINTZM', 4121)
   // allowNull defaults to true
 }
}, {
  
 sequelize,
 modelName: 'drills_with_rel_id',
 freezeTableName: true,
 timestamps:false,
 schema:'pois'
 // options
});

class KOLEKTER extends Model {}
KOLEKTER.init({
 // attributes
 gid: {
   type: Sequelize.INTEGER,
   primaryKey:true,
   allowNull: false
 },
 objectid: {
   type: Sequelize.BIGINT

 },
 name: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  folderpath: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  snippet: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  popupinfo: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  labelid: {
   type: Sequelize.BIGINT
   // allowNull defaults to true
 },
  area: {
   type: Sequelize.CHAR(50)
   // allowNull defaults to true
 },
  areaid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
  munid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
 munareaid: {
   type: Sequelize.SMALLINT
   // allowNull defaults to true
 },

  geom: {
   type: Sequelize.GEOMETRY('POINTZM', 4121)
   // allowNull defaults to true
 }
}, {
  
 sequelize,
 modelName: 'collecteur_with_rel_id',
 freezeTableName: true,
 timestamps:false,
 schema:'pois'
 // options
});


class MAINPIPES extends Model {}
MAINPIPES.init({
// attributes
gid: {
  type: Sequelize.INTEGER,
  primaryKey:true,
  allowNull: false
},
objectid: {
  type: Sequelize.BIGINT

},
name: {
  type: Sequelize.CHAR(254)
  // allowNull defaults to true
},
 folderpath: {
  type: Sequelize.CHAR(254)
  // allowNull defaults to true
},
 snippet: {
  type: Sequelize.CHAR(254)
  // allowNull defaults to true
},
 popupinfo: {
  type: Sequelize.CHAR(254)
  // allowNull defaults to true
},
shape_leng: {
  type: Sequelize.FLOAT(10,10)
  // allowNull defaults to true
},

 area: {
  type: Sequelize.CHAR(50)
  // allowNull defaults to true
},


 munid: {
  type: Sequelize.INTEGER
  // allowNull defaults to true
},
munareaid: {
  type: Sequelize.SMALLINT
  // allowNull defaults to true
},
labelid: {
  type: Sequelize.BIGINT
  // allowNull defaults to true
},
areaid: {
  type: Sequelize.INTEGER
  // allowNull defaults to true
},

 geom: {
  type: Sequelize.GEOMETRY('MULTILINESTRING', 4121)
  // allowNull defaults to true
}
}, {
 
sequelize,
modelName: 'primary_pipelines_with_rel_id',
freezeTableName: true,
timestamps:false,
schema:'pois'
// options
});

class PUMPHOUSE extends Model {}
PUMPHOUSE.init({
 // attributes
 gid: {
   type: Sequelize.INTEGER,
   primaryKey:true,
   allowNull: false
 },
 objectid: {
   type: Sequelize.BIGINT

 },
 name: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  folderpath: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  snippet: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  popupinfo: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  labelid: {
   type: Sequelize.BIGINT
   // allowNull defaults to true
 },
  area: {
   type: Sequelize.CHAR(50)
   // allowNull defaults to true
 },
  areaid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
  munid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
 munareaid: {
   type: Sequelize.SMALLINT
   // allowNull defaults to true
 },

  geom: {
   type: Sequelize.GEOMETRY('POINTZM', 4121)
   // allowNull defaults to true
 }
}, {
  
 sequelize,
 modelName: 'pumpstations_with_rel_id',
 freezeTableName: true,
 timestamps:false,
 schema:'pois'
 // options
});

class SECONDARYPIPES extends Model {}
SECONDARYPIPES.init({
// attributes
gid: {
  type: Sequelize.INTEGER,
  primaryKey:true,
  allowNull: false
},
objectid: {
  type: Sequelize.BIGINT

},
name: {
  type: Sequelize.CHAR(254)
  // allowNull defaults to true
},
 folderpath: {
  type: Sequelize.CHAR(254)
  // allowNull defaults to true
},
 snippet: {
  type: Sequelize.CHAR(254)
  // allowNull defaults to true
},
 popupinfo: {
  type: Sequelize.CHAR(254)
  // allowNull defaults to true
},
shape_leng: {
  type: Sequelize.FLOAT(10,10)
  // allowNull defaults to true
},

 area: {
  type: Sequelize.CHAR(50)
  // allowNull defaults to true
},


 munid: {
  type: Sequelize.INTEGER
  // allowNull defaults to true
},
munareaid: {
  type: Sequelize.SMALLINT
  // allowNull defaults to true
},
labelid: {
  type: Sequelize.BIGINT
  // allowNull defaults to true
},
areaid: {
  type: Sequelize.INTEGER
  // allowNull defaults to true
},

 geom: {
  type: Sequelize.GEOMETRY('MULTILINESTRING', 4121)
  // allowNull defaults to true
}
}, {
 
sequelize,
modelName: 'secondary_pipelines_with_rel_id',
freezeTableName: true,
timestamps:false,
schema:'pois'
// options
});

class TANKS extends Model {}
TANKS.init({
 // attributes
 gid: {
   type: Sequelize.INTEGER,
   primaryKey:true,
   allowNull: false
 },
 objectid: {
   type: Sequelize.BIGINT

 },
 name: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  folderpath: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  snippet: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  popupinfo: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  labelid: {
   type: Sequelize.BIGINT
   // allowNull defaults to true
 },
  area: {
   type: Sequelize.CHAR(50)
   // allowNull defaults to true
 },
  areaid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
  munid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
 munareaid: {
   type: Sequelize.SMALLINT
   // allowNull defaults to true
 },

  geom: {
   type: Sequelize.GEOMETRY('POINTZM', 4121)
   // allowNull defaults to true
 }
}, {
  
 sequelize,
 modelName: 'tanks_with_rel_id',
 freezeTableName: true,
 timestamps:false,
 schema:'pois'
 // options
});

class VANES extends Model {}
VANES.init({
 // attributes
 gid: {
   type: Sequelize.INTEGER,
   primaryKey:true,
   allowNull: false
 },
 objectid: {
   type: Sequelize.BIGINT

 },
 name: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  folderpath: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  snippet: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  popupinfo: {
   type: Sequelize.CHAR(254)
   // allowNull defaults to true
 },
  labelid: {
   type: Sequelize.BIGINT
   // allowNull defaults to true
 },
  area: {
   type: Sequelize.CHAR(50)
   // allowNull defaults to true
 },
  areaid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
  munid: {
   type: Sequelize.INTEGER
   // allowNull defaults to true
 },
 munareaid: {
   type: Sequelize.SMALLINT
   // allowNull defaults to true
 },

  geom: {
   type: Sequelize.GEOMETRY('POINTZM', 4121)
   // allowNull defaults to true
 }
}, {
  
 sequelize,
 modelName: 'valves_with_rel_id',
 freezeTableName: true,
 timestamps:false,
 schema:'pois'
 // options
});
//KOLEKTER.sync();
  module.exports = {ANODEPIPES,DRILL,BOOSTERS,KOLEKTER,MAINPIPES,PUMPHOUSE,SECONDARYPIPES,TANKS,VANES };*/
