

//fs = require('fs');
 
// stub out a fake browser for ext-core-debug.
/*navigator = {};
window = {
  navigator : 'Windows',
  attachEvent: function() {return false;}
};
navigator = {'userAgent' : 'node'};
document = {
  documentElement:'',
  getElementsByTagName:'script'};
  
  // Helper function 
function injectjs(f) {
  eval(fs.readFileSync('../extjs'+f+'.js', encoding="ascii"));
}

//Pull in Ext components
injectjs('/ext-all-debug');
injectjs('/src/util/Filter');

injectjs('/src/util/Sorter');
injectjs('/src/util/Observable');
injectjs('/src/data/Connection');
injectjs('/src/Ajax');
injectjs('/src/util/Stateful');
injectjs('/src/util/Inflector');
injectjs('/src/util/MixedCollection');
injectjs('/src/data/ResultSet');
injectjs('/src/data/Batch');
injectjs('/src/data/Reader');
injectjs('/src/data/onReader');
injectjs('/src/data/Writer');
injectjs('/src/data/onWriter');
injectjs('/src/data/Errors');
injectjs('/src/data/Operation');
injectjs('/src/data/Proxy');
injectjs('/src/data/ServerProxy');
injectjs('/src/data/AjaxProxy');
injectjs('/src/data/RestProxy');
injectjs('/src/data/validations');
injectjs('/src/util/Date');
injectjs('/src/data/SortTypes');
injectjs('/src/data/Association');
injectjs('/src/data/Types');
injectjs('/src/util/Observable');
injectjs('/src/util/HashMap');
injectjs('/src/AbstractManager');
injectjs('/src/PluginMgr');
injectjs('/src/data/Field');
injectjs('/src/data/BelongsToAssociation');
injectjs('/src/data/HasManyAssociation');
injectjs('/src/data/PolymorphicAssociation');
injectjs('/src/data/Model');
injectjs('/src/ModelMgr');*/

// Register the model
require("node-extjs-core");
require("node-extjs");
console.log(Ext.getVersion().version);

Ext.define("User", {
    extend: 'Ext.data.Model',

	fields: [
		{name: 'name',     type: 'string'},
		{name: 'age',      type: 'int'},
		{name: 'phone',    type: 'string'},
		{name: 'gender',   type: 'string'},
		{name: 'username', type: 'string'},
		{name: 'alive',    type: 'boolean', defaultValue: true}
	],

	validations: [
		{type: 'presence',  field: 'age'},
		{type: 'length',    field: 'name',     min: 2},
		{type: 'inclusion', field: 'gender',   list: ['Male', 'Female']},
		{type: 'exclusion', field: 'username', list: ['Admin', 'Operator']},
		{type: 'format',    field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}
	],
	
	changeName: function() {
		var oldName = this.get('name'),
			newName = oldName + " The Barbarian";

		this.set('name', newName);
	}
});

var user = Ext.create("User", {
	name : 'Conan',
	age  : 24,
	phone: '555-555-5555'
});

function hello() {
     console.log("hello " );
}
user.changeName();

console.log(user.get('name')); //returns "Conan The Barbarian"

var errors = user.validate();

console.log(errors);