Ext.define('Spicy.view.hr.Index', {
    extend: 'Ext.container.Container',
    alias: 'widget.hrindex',

    title: 'HR Management Overview',
    padding: 10,
    html: '<h1>Welcome to HR Managemt<h1>',
    
    initComponent: function() {
        var me = this;

        // Ext.applyIf(me, {
        //     items: [
        //         {
        //             // xtype: 
        //         }
        //     ]
        // });

        me.callParent(arguments);
    }

});