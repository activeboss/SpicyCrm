Ext.define('Spicy.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'Spicy.view.Head',
        'Spicy.view.RightPanel',
        'Spicy.view.MainPanel',
        'Spicy.view.LeftPanel',
        'Spicy.view.Footer'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'head',
                    margins: '0 0 2 0',
                    region: 'north'
                },
                {
                    xtype: 'rightpanel',
                    margin: '0 2 0 0',
                    closable: false,
                    collapseFirst: false,
                    collapsed: true,
                    collapsible: true,
                    region: 'east',
                    split: true
                },
                {
                    xtype: 'mainpanel',                  
                    region: 'center'
                },
                {
                    xtype: 'leftpanel',
                    margin: '0 0 0 2',
                    collapsible: true,
                    region: 'west',
                    split: true
                },
                {
                    xtype: 'footer',
                    region: 'south'
                }
            ]
        });

        me.callParent(arguments);
    }

});