Ext.define('Spicy.view.department.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.department-list',

    title: 'Department',
    store: 'Deps',
    height: 283,
    frame: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            
            columns: [
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    dataIndex: 'name',
                    text: 'Department'
                },
                {
                    xtype: 'datecolumn',
                    width: 100,
                    dataIndex: 'created_at',
                    format: 'd/m/Y H:i',
                    text: 'Created Date'
                },
                {
                    xtype: 'gridcolumn',
                    width: 100,
                    dataIndex: 'created_by',
                    text: 'Created By'
                },
                {
                    xtype: 'datecolumn',
                    width: 100,
                    hidden: true,
                    dataIndex: 'updated_at',
                    format: 'd/m/Y H:i',
                    text: 'Update Date'
                },
                {
                    xtype: 'gridcolumn',
                    width: 100,
                    hidden: true,
                    dataIndex: 'updated_by',
                    text: 'Updated By'
                },
            ],
            viewConfig: {
                
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    itemId: 'deptool',
                    width: 360,
                    displayInfo: true,
                    store: 'Deps'
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'adddepartment',
                            text: 'Add New Department',
                            iconCls: 'add'
                        },
                        {
                             xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'delete',
                            text: 'Delete',
                            iconCls: 'delete',
                            disabled: true
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});