Ext.define('Spicy.store.hr.Hrmodules', {
	extend: 'Ext.data.Store',
	storeId: 'Hrmodules',
	model: 'Spicy.model.hr.Hrmodule',

	data: [
		{menuTitle: 'admin', menuIcon: 'icon'},
		{menuTitle: 'admin1', menuIcon: 'icon1'}
	]	
});