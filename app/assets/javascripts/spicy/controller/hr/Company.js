Ext.define('Spicy.controller.hr.Company', {
    extend: 'Ext.app.Controller',

    models:['hr.Company', 'hr.Phone', 'hr.PhoneGrid'],
    stores:['hr.Companys', 'hr.Phones', 'hr.PhoneGrids'],
    views: [
    	'company.Main',
    	'company.Form',
        'company.Detail',
        'company.Phones',
        'company.ShareHolder',
        'company.Adress',
        'common.PopupWindow',
        'phone.PhoneForm'
    ],

    refs: [
        // {
        //     ref: 'popupWindow',
        //     selector: 'popupwindow',
        // },
        {
            ref: 'companyPhone',
            selector: 'companymain companyphones'
        },
        {
            ref: 'companydetail',
            selector: 'companymain companydetail'
        },
        {
            ref: 'companyadress',
            selector: 'companymain companyadress'
        }
    ],

    addContent	: function() {
		this.container.add({
			xtype : 'companymain',
			itemId: 'companymain'
		});
	},
    onDeletePhone : function() {
        var record = this.getCompanyPhone().getSelectionModel().getSelection()[0];
    },

    // handleSpecialKey: function(field, e, options) {
    //     if(e.getKey() === e.ENTER) {
    //         this.onAddNewPhone();
    //     }
    // },

    onAddNewPhone: function(button){
        var me = this,
            win = button.up('window'),
            form = win.down('form');
            // values = form.getValues();

        var companyid = me.getHrCompanysStore().last().get('id');

        form.form.setValues({owner: companyid});

        var store = me.getHrPhonesStore(),
            values = form.getValues(),
            phone = Ext.create('Spicy.model.hr.Phone', values),
            errors = phone.validate();     

        if(errors.isValid()){
            var formRecord = form.getRecord();

            if(formRecord){
                formRecord.set(values);
            }else{
                store.add(phone);
            }

            store.sync({
                success: function() {
                    win.close();
                }
            });

        }else{
            form.getForm().markInvalid(errors);
            var errors = phone.validate();

            errors.each(function(error){
                console.log(error.field,error.message);
            });
        }
    },

    deletePhone: function(view, record) {
        var me = this;

        Ext.Msg.show({
            title: 'Delete Phone?',
            msg: 'Are you sure you want to delete this: <br>' + record.get('phonetype') + ': ' + record.get('number') + ' ?',
            buttons: Ext.Msg.YESNO,
            fn: function(response) {
                if(response === 'yes') {
                    me.getHrPhonesStore().remove(record);
                    me.getHrPhonesStore().sync();
                }
            }
        });
    },

    onUpdateCompany: function(button) {

        var me = this,
            win = button.up('window'),//me.getPopupWindow(),
            form = win.down('form'),
            store = me.getHrCompanysStore(),
            values = form.getValues(),
            formRecord = Ext.create('Spicy.model.hr.Company', values),
            errors = formRecord.validate();    

        if (errors.isValid) {
            formRecord = form.getRecord();
            formRecord.set(values);
        } else {
            return;
        }
        win.close();
        store.sync();
    },

    createEditPopupWindow: function(view, record, item, index, e, eOpts) {

        var phonelist = view.getRecord(view.findTargetByEvent(e));


        var me = this,
            module = view.moduleForm;

        if(view.xtype == 'companydetail') {
            titletext = 'Edit : ' + record.get('companyname');
        };

        if(module == 'phoneform') {
            titletext = 'Edit Company : ' + record.get('phonetype');
        };
        
        var win = Ext.create('widget.popupwindow', {
                    title: titletext,
                    width: 500,
                    itemId: module,
                    items: [{ xtype: module, frame: true }] 
                }),
            form = win.down('form');

        if(phonelist) {
            form.loadRecord(phonelist);
            win.show();            
        } else {
            Ext.Msg.alert('Errors', 'Call Varit!' ); 
        }    
    },

    createAddPopupWindow : function(button) {
        
        var me = this,
            win = Ext.create('widget.popupwindow', {
                    title: button.text,
                    width: 500,
                    itemId: button.action,
                    items: [{ xtype: button.action, frame: true }] 
                });

        win.show();

    },

    onCompanyLoads: function(store, records) {
        var me = this,
            store = me.getHrCompanysStore(),
            phonestore = me.getHrPhonesStore();

        var companyid = store.last().get('id');

        phonestore.filter({property: 'owner', value: companyid, exactMatch: true })

        me.getCompanydetail().bindStore(store);
        me.getCompanyadress().bindStore(store);

        me.getCompanyPhone().bindStore(phonestore);
        // this.getCompanyPhone().bindStore(me.getHrPhoneGridsStore());
    },
    showActions: function(view, task, node, rowIndex, e) {
        var div = Ext.Element.get('iconbox');
            div.removeCls('x-hidden');
    },

    hideActions: function(view, task, node, rowIndex, e) {
        var div = Ext.Element.get('iconbox');
            div.addCls('x-hidden');
        // var icons = Ext.DomQuery.select('.x-action-col-icon', node);
        // Ext.each(icons, function(icon){
        //     Ext.get(icon).addCls('x-hidden');
        // });
    },
    
    init: function() {
        var me = this;

        me.getHrCompanysStore().on({
            scope: me,
            load : me.onCompanyLoads
        });

        me.control({
            'companymain' : {
                beforerender : me.onCompanyLoads
            },
            'companymain toolbar button[action=phoneform]' : {
                click : me.createAddPopupWindow
            },
            'companydetail' : {
                itemclick : me.createEditPopupWindow
                // itemmouseenter: this.showActions,
                // itemmouseleave: this.hideActions,
            },
            'companyphones' : {
                // itemclick : me.createEditPopupWindow,
                editclick : me.createEditPopupWindow,
                deleteclick : me.deletePhone
                // itemmouseenter: this.showActions,
                // itemmouseleave: this.hideActions,
            },
            '#companyform button[action=save]' : {
                click : me.onUpdateCompany
            },
            '#phoneform button[action=save]' : {
                click : me.onAddNewPhone
            },
            // 'popupwindow form textfield' : {
            //     specialkey: me.handleSpecialKey
            // }
            
        });
    }
});