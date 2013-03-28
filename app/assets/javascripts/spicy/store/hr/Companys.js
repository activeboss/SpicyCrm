Ext.define('Spicy.store.hr.Companys', {
	extend: 'Ext.data.Store',
	
	constructor : function(cfg){
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			autoLoad: true,
			// autoSync: true,
			model: 'Spicy.model.hr.Company',
			storeId: 'CompanysS',

			proxy: {
				type: 'ajax',
				url: '/companies.json',
				format: 'json',
				reader: {
					type: 'json',
					root: 'companies',
					// record: 'phones',
					successProperty: 'success',
					messageProperty: 'msg'
				}
			}
		}, cfg)]);
	}			
});