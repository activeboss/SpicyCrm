Ext.define('Spicy.controller.Departments', {
    extend: 'Ext.app.Controller',

    stores:['Deps'],
    models:['Dep'],
    views: ['department.List', 'department.EditWindow'],

    refs: [
        {
  	       ref: 'list',
  	       selector: 'department-list'
        },
        {
    	   ref: 'editWindow',
    	   selector: 'department-editwindow',
    	   xtype: 'department-editwindow',
    	   autoCreate: true
        }
    ],

    onActivateDeleteButton: function(selectionModel, selections){
    	this.getList().down('#delete').setDisabled(selections.length === 0);
    },

    onOpenEditWindow: function(t, rec){
        var win = this.getEditWindow();
        
        if (rec.id) {
            win.setTitle('Edit Department - '+ rec.get('name'));
            win.down('form').getForm().loadRecord(rec);
            win.show();
        } else {
            win.show();
        }    
    },
   
    onSaveOrUpdate: function(){
        var win = this.getEditWindow(),
            form = win.down('form').getForm(),
            store = this.getDepsStore(),
            values = form.getValues(),
            formRecord = form.getRecord(),
            department = Ext.create('Spicy.model.Dep', values);

        if(form.isValid()){    
            if (formRecord) {
                // perform update
                // var csrfToken = Ext.select('meta[name=csrf-token]').elements[0].getAttribute('content');
                formRecord.set(values);
            } else {
                // perfom create
                store.add(department)
            }
            store.reload();
            win.close();
        } else {
            return;
        }                 
    },

    onDelete: function(button, e){     
        this.deleteRec(this.getList().getSelectionModel().getSelection()[0]);
    },
    deleteRec: function(record, successCallback){
       var me = this;
        Ext.Msg.show({
            title: 'Delete Department?',
            msg: 'Are you sure you want to delete '+ record.get('name'),
            buttons: Ext.Msg.YESNO,
            fn: function(response) {
                if(response === 'yes') {
                        me.getDepsStore().remove(record);
                        me.getDepsStore().reload();                   
                    }
            }
        }); 
    },

    init: function() {
        this.control({
        	"department-list": {
        		selectionchange: this.onActivateDeleteButton,
        		itemdblclick: this.onOpenEditWindow
        	},
            "department-editwindow #save": {
                click: this.onSaveOrUpdate
            },
            "department-list #delete": {
                click: this.onDelete
            },
            "department-list #adddepartment": {
                click: this.onOpenEditWindow
            }
        });
    }
});