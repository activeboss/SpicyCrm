Ext.define('Spicy.view.menu.Hr', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.menu-hr',

    floating: false,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'menuitem',
                    navUrl: 'hr-index',
                    text: 'Organization',
                    module: 'Organization'
                    // href: 'hr'
                },
                {
                    xtype: 'menuitem',
                    itemId: 'hr-company',
                    text: 'Company Informations',
                    module: 'Company Informations'
                }
            ]
        });

        me.callParent(arguments);
    }
});