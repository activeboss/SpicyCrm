Ext.define('Spicy.view.PopupWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.popupwin',

    modal: true,
    plain: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            text: 'Cancel'
                        },
                        {
                            xtype: 'button',
                            itemId: 'save',
                            text: 'Save'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});