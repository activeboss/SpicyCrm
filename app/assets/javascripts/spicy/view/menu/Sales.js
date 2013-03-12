Ext.define('Spicy.view.menu.Sales', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.menusales',

    floating: false,
    width: 120,
    iconCls: 'user_gray',
    title: 'SalesForce',
    allowOtherMenus: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'menuitem',
                    itemId: 'userindex',
                    text: 'Sales'
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