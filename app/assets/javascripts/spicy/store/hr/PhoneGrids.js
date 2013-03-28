Ext.define('Spicy.store.hr.PhoneGrids', {
	extend: 'Ext.data.Store',

	model: 'Spicy.model.hr.PhoneGrid',
	autoLoad: true,
	pageSize: 8,

	proxy: {
		type : 'rest',
		url: '/companies',

		format: 'json',
		
		reader	: {
			type	: 'json',
			root	: 'phones',
			totalProperty: 'total',
			successProperty: 'success',
			messageProperty: 'errors'
		},
		writer : {
			
		}
	}	
});