Ext.define('Spicy.store.hr.Phones', {
	extend: 'Ext.data.Store',

	constructor : function(cfg){
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			autoLoad: true,
			autoSync: false,
			model: 'Spicy.model.hr.Phone',
			// groupField: 'phonetype',
			storeId: 'Phones',
			idProperty: 'id',
			proxy: {
				type: 'rest',
				url: '/phones',
				format: 'json',
				reader: {
					type: 'json',
					root: 'data',
					// record: 'phones',
					successProperty: 'success',
					messageProperty: 'msg'
				},
				writer	: {
					// type	: 'json',
					// allowSingle	: false
				}
			}
		}, cfg)]);
	}	
});