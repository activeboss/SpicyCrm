Ext.define('Spicy.view.hr.Navigations', {
	extend: 'Ext.menu.Menu',
	alias: 'widget.hr-navigations',

	floating: false,

	initComponent: function() {
		var me = this;

		 Ext.applyIf(me, {
		 	defaults: {
		 		xtype: 'menuitem'
		 	},
            items: [
                { text: 'HRM Dashboard', iconCls: 'hrm', controller: 'Spicy.controller.hr.Main' },
                { itemId: 'company',text: 'Company Informations', iconCls: 'companies',  controller: 'Spicy.controller.hr.Company' },
                { text: 'Organization', iconCls: 'building', controller: 'Spicy.controller.hr.Organization' },
                { text: 'Leave', controller: 'Spicy.controller.hr.Leave' },
                { text: 'Time', controller: 'Spicy.controller.hr.Time' },
                { text: 'Recruitment', controller: 'Spicy.controller.hr.Recruitment' },
                { text: 'Performance', controller: 'Spicy.controller.hr.Performance' },
                { text: 'Setup', controller: 'Spicy.controller.hr.Setup' }
            ]
        });
        me.callParent(arguments);
	}
});