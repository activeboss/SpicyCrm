Ext.define('Spicy.view.menu.Setting', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.menusetting',

    floating: false,
    width: 120,
    iconCls: 'database_gear',
    title: 'Settings',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'menuitem',
                    itemId: 'userindex',
                    iconCls: 'user',
                    text: 'Users'
                },
                {
                    xtype: 'menuitem',
                    itemId: 'admin-index',
                    text: 'Department Setup'
                },
                {
                    xtype: 'menuitem',
                    itemId:'userlist',
                    text: 'list Item'
                }
            ]
        });

        me.callParent(arguments);
    }

});