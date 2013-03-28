Ext.define('Spicy.model.hr.Company', {
	extend: 'Ext.data.Model',

	fields: [
		{ name: 'id', type: 'auto' },
		{ name: 'companyname', type: 'auto' },
		{ name: 'reg_no', type: 'auto' },
		{ name: 'tax_id', type: 'auto' },
		{ name: 'reg_capital', type: 'auto' },
		{ name: 'street1', type: 'auto' },
		{ name: 'street2', type: 'auto' },
		{ name: 'street3', type: 'auto' },
		{ name: 'city', type: 'auto' },
		{ name: 'zip', type: 'auto' },
		{ name: 'country', type: 'auto' }
	],
	hasMany: {model: 'Spicy.model.hr.Phone', name: 'getPhones'},

	// idProperty: 'id',
	// proxy: {
	// 	type : 'rest',
	// 	url: '/companies',
	// 	format: 'json',
		
	// 	reader	: {
	// 		type	: 'json',
	// 		root	: 'companies',
	// 		// record  : 'phones',
	// 		// record: 'companies',
	// 		successProperty: 'success',
	// 		messageProperty: 'errors'
	// 	},
	// 	writer : {
			
	// 	}
	// }	
});