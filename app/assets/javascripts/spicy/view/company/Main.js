Ext.define('Spicy.view.company.Main',{
	extend      : 'Ext.container.Container',
	alias       : 'widget.companymain',

	layout: {
        align: 'stretch',
        type: 'vbox'
    },

	initComponent: function() {
        var me = this;

    Ext.applyIf(me, {
            items: [ 
                {
                    xtype: 'panel',
                    bodyPadding: 10,
                    // flex: 1,
                    border: false,
                    layout: {
                        align: 'stretch',
                        type: 'hbox',
                    },
                    defaults: {
                        flex: 1,
                        xtype: 'fieldset',
                    },
                    tbar: ['->', 
                        { xtype: 'button', text: 'Add Phone Number', iconCls: 'add',action: 'phoneform' },
                        { xtype: 'button', text: 'Add Company Share Holders',action: 'addshareholder' }
                    ],
                    items: [
                        {
                            title: 'Company Informations',
                            margins: '0 10 0 0',
                            items: [
                                {
                                    xtype: 'companydetail',
                                    padding: '10 0 10 0'
                                }
                            ]        
                        },
                        {
                            title: 'Head Quoter Adress',
                            items: [
                                {
                                    xtype: 'companyadress',
                                    padding: '10 0 10 0'
                                }    
                            ]    
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: '0 10 0 10',
                    // flex: 1,
                    border: false,
                    layout: {
                        align: 'stretch',
                        type: 'hbox',
                    },
                    defaults: {
                        flex: 1,
                        xtype: 'fieldset',
                    },
                    items: [
                        {
                            title: 'Company Phone Number',
                            margins: '0 10 0 0',
                            iconCls: 'add',
                            items: [
                                {
                                    xtype: 'companyphones',
                                    padding: '10 0 10 0'
                                }
                            ]
                        },
                        {
                            title: 'Company Share Holders',
                            items: [
                                {
                                    xtype: 'companyshareholder'
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