Ext.define('Spicy.view.company.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.companyform',
    standardSubmit: true,

    itemId: 'companyform',
    bodyPadding: 5,
    defaults: {
    	flex: 1,
        xtype: 'fieldset',
        margins: '5',
        padding: 5
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
                
            items: [
                {
                    defaults: {
                        labelWidth: 115,
                        xtype: 'textfield',
                        anchor: '100%',
                        labelAlign: 'right',
                    },
                    title: 'Company Informations',
                    items: [
                        { xtype: 'hidden', fieldLabel: 'id', name: 'id' },
                        { fieldLabel: 'Companys Name', name: 'companyname' },
                        { fieldLabel: 'Registration Number', name: 'reg_no' },
                        { fieldLabel: 'Tax ID', name: 'tax_id' },
                        { fieldLabel: 'Registered capital', name: 'reg_capital' }
                    ]
                },
                {
                    defaults: {
                        labelWidth: 115,
                        xtype: 'textfield',
                        anchor: '100%',
                        labelAlign: 'right',
                    },
                    title: 'Head Quoter Adress',
                    items: [
                        { fieldLabel: 'House No/Building ', name: 'street1' },
                        { fieldLabel: 'Street/Road', name: 'street2' },
                        { fieldLabel: 'District', name: 'street3' },
                        {
                        	xtype: 'container',
                        	layout: 'hbox',
                        	margin: '0 0 5 0',
                        	defaults: { labelAlign: 'right', xtype: 'textfield',},
                        	items: [ 
                                { labelWidth: 115, flex: 2, fieldLabel: 'City', name: 'city' },
                        		{ fieldLabel: 'PostCode', flex: 1, labelWidth: 60, name: 'zip'}
                        	]
                        },
                        { fieldLabel: 'Country', name: 'country' }
                    ]
                },
            ]            
        });
        me.callParent(arguments);
    }
});