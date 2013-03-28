Ext.define('Spicy.view.common.MainTabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.maintabs',

    requires: [
        'Spicy.view.hr.Index'
    ],    
    plain: true,
    // border: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'hrindex',
                    padding: 10,
                }
            ]
        });

        me.callParent(arguments);
    }

});