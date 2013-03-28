Ext.define('Spicy.view.user.Index', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userindex',

    title: 'Users',
    iconCls: 'user',
    // border: false,
   // itemId: 'userindex',
   // store: 'UsersStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    flex: 1,
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'title',
                    flex: 1,
                    text: 'Title'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'department',
                    flex: 1,
                    text: 'Department'
                },
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'phone_mobile',
                    text: 'Mobile Phone'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'status',
                    text: 'Status'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    displayInfo: true,
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    itemId: 'toptoolbar',
                    items: [
                        {
                            xtype: 'button',
                            urlForm: 'userform',
                            itemId: 'add',
                            iconCls: 'add',
                            text: 'Add New User',
                            border: false
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});