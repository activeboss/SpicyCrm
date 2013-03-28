Ext.define('Spicy.view.common.TopPanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.toppanel',

    height: 49,
    style: 'padding: 10px 10px 10px 20px; background-color: #23427C;',
    layout: {
        align: 'stretch',
        type: 'hbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    html: '<img src="/assets/logo.png" alt="logo" width="151" height="25" border="0">',
                    itemId: 'logo',
                    width: 150
                },
                {
                    xtype: 'toolbar',
                    itemId: 'modulenav',
                    flex: 1,
                    // padding: 5,
                    ui: 'footer',
                },
                {
                    xtype: 'container',
                    flex: 1,
                    html: 'Login By Varit Onvnog | Logout',
                    itemId: 'login',
                    style: 'text-align: right; color: white;'
                }
            ]
        });

        me.callParent(arguments);
    }

});