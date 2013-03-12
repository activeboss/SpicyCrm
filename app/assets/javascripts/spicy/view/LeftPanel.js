Ext.define('Spicy.view.LeftPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.leftpanel',

    requires: [
        'Spicy.view.menu.Sales',
        'Spicy.view.menu.Setting'
    ],

    maxWidth: 250,
    width: 200,
    layout: {
        type: 'accordion'
    },
    title: 'Navigation',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'menusetting'
                },
                {
                    xtype: 'menusales'
                }
            ]
        });

        me.callParent(arguments);
    }

});