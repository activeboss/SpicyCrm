Ext.define('Spicy.model.hr.PhoneGrid', {
	extend: 'Ext.data.Model',
	
	fields: [
		'id',
		'phonetype',
		'number',
		'owner',
	],
	idProperty: 'id',
	belongsTo: { model: 'Spicy.model.hr.Company', name: 'companys'}		
});