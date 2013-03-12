Ext.define('Spicy.view.department.EditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.department-editwindow',

    modal: true,
    plain: true,
    width: 300,
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
            ],
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    url: 'departments.json',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'name',
                            fieldLabel: 'Department Name',
                            allowBlank: false,
                            labelWidth: 100 
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});