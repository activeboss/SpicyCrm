Ext.define('Spicy.model.hr.Phone', {
	extend: 'Ext.data.Model',
	
	idProperty: 'id',
	fields: [
		'id',
		'phonetype',
		'number',
		'owner',
	],

	belongsTo: 'Spicy.model.hr.Company'	
});