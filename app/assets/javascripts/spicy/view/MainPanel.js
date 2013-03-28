Ext.define('Spicy.view.MainPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',

    // plain: true,
    // border: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'userindex'
                }
            ]
        });

        me.callParent(arguments);
    }

});