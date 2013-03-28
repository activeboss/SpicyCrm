Ext.define('Spicy.view.menu.Sales', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.menu-sales',

    floating: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'menuitem',
                    navUrl: 'userindex',
                    text: 'Sales',
                    module: 'Sales'
                },
                {
                    xtype: 'menuitem',
                    text: 'Menu Item'
                },
                {
                    xtype: 'menuitem',
                    text: 'Menu Item'
                }
            ]
        });

        me.callParent(arguments);
    }

});