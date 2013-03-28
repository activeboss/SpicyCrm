Ext.define('Spicy.view.common.Footer', {
    extend: 'Ext.container.Container',
    alias: 'widget.footer',

    height: 20,
    style: 'background-color: #23427C; color: white;',
    html: '<div style="text-align:center; font-size:0.78em;">©2013 Onvong Technologies Co.,Ltd.</div>',
    itemId: 'footer',
    padding: '5 0 5 0',

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});