Ext.define('Spicy.view.menu.Setting', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.menu-setting',

    floating: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'menuitem',
                    navUrl: 'userindex',
                    iconCls: 'user',
                    text: 'Users'
                },
                {
                    xtype: 'menuitem',
                    navUrl: 'admin-index',
                    text: 'Department Setup'
                },
                {
                    xtype: 'menuitem',
                    navUrl:'userlist',
                    text: 'list Item'
                }
            ]
        });

        me.callParent(arguments);
    }

});