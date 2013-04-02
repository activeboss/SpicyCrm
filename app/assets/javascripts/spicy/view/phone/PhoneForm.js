Ext.define('Spicy.view.phone.PhoneForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.phoneform',

    defaults: {
        labelWidth: 115,
        xtype: 'textfield',
        anchor: '100%',
        // labelAlign: 'right',
    },

    initComponent: function() {
        var me = this;

        var phonetype = Ext.create('Ext.data.Store', {
        	fields: ['type'],
        	data: [
        		{ "type":"Main Phone" },
        		{ "type":"Office Phone" },
        		{ "type":"Mobile" },
        		{ "type":"Iphone" },
        		{ "type":"Home Phone" },
        		{ "type":"Other" }
        	]
        });

    Ext.applyIf(me, {
            items: [
                // { xtype: 'hidden', fieldLabel: 'id', name: 'id' },
                {  
                	xtype: 'combobox',
		            fieldLabel: 'Choose Phone Type',
		            name: 'phonetype',
		            store: phonetype,
		            valueField: 'type',
		            displayField: 'type',
		            typeAhead: false,
                    forceSelection : true,
		            queryMode: 'local',
                    validateOnChange: true,
		            emptyText: 'Select a phone type...'
        		},
        		{ fieldLabel: 'Phone Number', name: 'number' },
                { xtype: 'hidden', fieldLabel: 'owner', name: 'owner' }
                // { xtype: 'hidden', fieldLabel: 'id', name: 'id' }
            ]
        });

        me.callParent(arguments);
    }

});