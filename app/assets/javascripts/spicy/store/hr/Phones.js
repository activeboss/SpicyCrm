Ext.define('Spicy.store.hr.Phones', {
	extend: 'Ext.data.Store',

	model: 'Spicy.model.hr.Phone',
	// autoLoad: true,
	// proxy: {
 //            type: 'memory',
 //            reader: {
 //                type: 'json',
 //                record: 'phones'
 //            }
 //        }
	// proxy: {
	// 	type : 'rest',
	// 	url: '/phones',

	// 	format: 'json',
		
	// 	reader	: {
	// 		type	: 'json',
	// 		root	: 'phones',
	// 		// record: 'item',
	// 		// record: 'companies',
	// 		successProperty: 'success',
	// 		messageProperty: 'errors'
	// 	},
	// 	writer : {
			
	// 	}
	// }	
});