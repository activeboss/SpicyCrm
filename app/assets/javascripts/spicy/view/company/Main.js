Ext.define('Spicy.view.company.Main',{
	extend      : 'Ext.container.Container',
	alias       : 'widget.companymain',

    requires:['Spicy.store.hr.Companys'],

	layout: {
        align: 'stretch',
        type: 'vbox'
    },

	initComponent: function() {
        var me = this;

        // var detail = Ext.create('Spicy.store.hr.Companys');
        //     detail.load();

        // var phone = Ext.create('Spicy.store.hr.PhoneGrids');
        //     phone.load();  


    Ext.applyIf(me, {
            items: [ 
                {
                    xtype: 'panel',
                    bodyPadding: 10,
                    items: 'ggggg',
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
                        { xtype: 'button', text: 'Add Company Phone',action: 'phoneform' },
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