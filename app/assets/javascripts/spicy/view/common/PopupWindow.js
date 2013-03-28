Ext.define('Spicy.view.common.PopupWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.popupwindow',

    modal: true,
    // plain: true,
    border: false,
    resizable: false,
    y: '60',

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
                            text: 'Cancel',
                            scope: this,
                            handler: this.close
                        },
                        {
                            xtype: 'button',
                            text: 'Save',
                            action: 'save'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});