Ext.define('Spicy.model.hr.Phone', {
	extend: 'Ext.data.Model',
	
	idProperty: 'id',
	// groupField: 'phonetype',
	fields: [
		'id',
		'phonetype',
		'number',
		'owner',
	],

	validations: [
    	{ type: 'presence', field: 'phonetype' },
    	// { type: 'format', field: 'phonetype', matcher:/^[\w ]+$/},
    	{ type: 'presence', field: 'number' },
    	// {type:  'format', field:'number',matcher:/^[\w ]+$/}
  	]
	// belongsTo: 'Spicy.model.hr.Company',	
});