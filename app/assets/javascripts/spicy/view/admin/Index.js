Ext.define('Spicy.view.admin.Index', {
    extend: 'Ext.container.Container',
    alias: 'widget.admin-index',

    padding: 10,
    style: 'background-color: #f0f0f0;',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    height: 50,
                    html: '<h1>Welcome to your company settup</h1>',
                    itemId: 'sethead'
                },
                {
                    xtype: 'container',
                    itemId: 'setspace',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            itemId: 'slbox',
                            items: [
                                {
                                    xtype: 'department-list',
                                    margin: '0 0 15 0'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            itemId: 'srbox',
                            margin: '0 0 0 15',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    margin: '0 0 15 0',
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
                                            width: 360,
                                            displayInfo: true
                                        },
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});