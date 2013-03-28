Ext.define('Spicy.view.hr.EmployeeList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.hr-employeelist',


    title: 'Employee List :: Sales Department',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'String'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'number',
                    text: 'Number'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'date',
                    text: 'Date'
                },
                {
                    xtype: 'booleancolumn',
                    dataIndex: 'bool',
                    text: 'Boolean'
                }
            ],
            viewConfig: {

            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    displayInfo: true
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Add',
                            tooltip: 'hello'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});