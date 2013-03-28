Ext.define('Spicy.view.common.LeftPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.leftpanel',

    maxWidth: 250,
    width: 200,
    layout: {
        type: 'accordion',
        // titleCollapse: false,
        animate: true,
        // activeOnTop: true
    },
    title: 'Main Navigation',

    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: MENUSYS.menu
        });
        me.callParent(arguments);
    }

});