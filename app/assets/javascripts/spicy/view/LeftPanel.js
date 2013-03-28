Ext.define('Spicy.view.LeftPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.leftpanel',

    requires: [
        'Spicy.view.menu.Sales',
        'Spicy.view.menu.Setting',
        'Spicy.view.menu.Hr'
    ],

    maxWidth: 250,
    width: 200,
    layout: {
        type: 'accordion',
        // titleCollapse: false,
        animate: true,
        activeOnTop: true
    },
    title: 'Navigation',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    title: 'HR Management',
                    iconCls: 'folder_user',
                    items: [{
                        xtype: 'menu-hr',
                        border: false,
                        bodyStyle: 'background:none;'

                    }]
                },
                {
                    title: 'Organisazions',
                    items:[{xtype: 'hr-organization', border: false,}]
                },
                {
                    title: 'SalesForce',
                    iconCls: 'user_gray',
                    items: [{
                        xtype: 'menu-sales',
                        // border: false,
                        bodyStyle: 'background:none;'
                    }]
                },
                {
                    title: 'Settings',
                    iconCls: 'database_gear',
                    items: [{
                        xtype: 'menu-setting',
                        border: false,
                        bodyStyle: 'background:none;'
                    }]
                }
            ]
        });

        me.callParent(arguments);
    }

});