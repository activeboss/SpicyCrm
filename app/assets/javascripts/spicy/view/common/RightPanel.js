Ext.define('Spicy.view.common.RightPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rightpanel',

    maxWidth: 250,
    width: 200,
    layout: {
        type: 'accordion'
    },
    title: 'Quick Info',

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});