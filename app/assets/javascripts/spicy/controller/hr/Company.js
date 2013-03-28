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
        {
            ref: 'popupWindow',
            selector: 'popupwindow',
        },
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

    addContent	: function(){
		this.container.add({
			xtype : 'companymain',
			itemId: 'companymain'
		});
	},

    onUpdateCompany: function(button) {

        var me = this,
            win = me.getPopupWindow(),
            form = win.down('form'),
            store = me.getHrCompanysStore(),
            values = form.getValues(),
            formRecord = store.last();

        if (form.isValid) {
            formRecord.set(values);
        } else {
            return;
        }
        win.close();
        store.sync();
    },

    onCreateEditPopupWindow: function(view,record) {
        var me = this,
            module = view.moduleForm;

        if(view.xtype == 'companydetail') {
            titletext = 'Edit : ' + record.get('companyname');
        };

        if(view.xtype == 'companyphones') {
            titletext = 'Edit Company : ' + record.get('phonetype');
        };
        
        var win = Ext.create('widget.popupwindow', {
                    title: titletext,
                    width: 500,
                    itemId: module,
                    items: [{ xtype: module, frame: true }] 
                }),
            form = win.down('form');

        if(record) {
            form.loadRecord(record);
            win.show();            
        } else { 
            win.show();
        }    
    },

    onCreateAddPopupWindow : function(button) {
        console.log(button.action);
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
            store = me.getHrCompanysStore();

        me.getCompanydetail().bindStore(store);
        me.getCompanyadress().bindStore(store);

        // this.getCompanyPhone().bindStore(this.getHrPhonesStore());
        this.getCompanyPhone().bindStore(me.getHrPhoneGridsStore());
    },
    
    init: function() {
        var me = this;

        // me.onCompanyLoads();
        me.getHrCompanysStore().on({
            scope: me,
            load : me.onCompanyLoads
        });
        // this.getCompanydetail().bindStore(this.getHrCompanysStore());

        me.control({
            'companymain' : {
                beforerender : me.onCompanyLoads
            },
            'companymain toolbar button[action=phoneform]' : {
                click : me.onCreateAddPopupWindow
            },
            'companydetail' : {
                itemclick : me.onCreateEditPopupWindow
            },
            'companyphones' : {
                itemclick : me.onCreateEditPopupWindow
            },
            '#companyform button[action=save]' : {
                click : me.onUpdateCompany
            }
        });
    }
});