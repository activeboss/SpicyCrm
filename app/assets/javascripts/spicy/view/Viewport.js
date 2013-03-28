Ext.define('Spicy.view.Viewport', {
    extend: 'Ext.container.Viewport',

    // requires: ['Spicy.view.common.PopupWindow'],
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'toppanel',
                    margins: '0 0 2 0',
                    region: 'north',   
                },
                {
                    xtype: 'toolbar',
                    region: 'north',
                    itemId: 'mainmenu',
                    padding: '0 10 0 10',
                    border: false,
                    items : [{
                        text : 'Start',
                        iconCls : 'home-icon16',
                        itemId  : 'startbutton',
                        menu    : [
                            {text:'HRM',iconCls:'hrm',controller:'Spicy.controller.hr.Main'},
                            {text:'Invoices',iconCls:'invoices-icon16',controller:'MyApp.controller.invoices.Invoices'},
                            {text:'Categories',iconCls:'categories-icon16',controller:'MyApp.controller.categories.Categories'}
                        ]
                    }]
                },
                {
                    xtype: 'rightpanel',
                    margin: '0 2 0 0',
                    collapsed: true,
                    collapsible: true,
                    region: 'east',
                    split: true
                },
                {
                    xtype: 'maintabs',
                    itemId: 'maintabs',                  
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