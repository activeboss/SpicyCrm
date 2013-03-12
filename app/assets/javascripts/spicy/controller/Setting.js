Ext.define('Spicy.controller.Setting', {
    extend: 'Ext.app.Controller',

    models: [
        'Users',
        'Dep'
    ],
    stores: [
        'Gender',
        'Deps'
    ],
    views: [
        'admin.SettingInfo',
        'department.List',
        'department.Form',
    ],

    refs: [
        {
            ref: 'DepForm',
            selector: 'departmentform'
        },
        {
            ref: 'PopupWin',
            selector: 'popupwin'
        },
        {
            ref: 'DepartmentList',
            selector: 'departmentlist'
        }
    ],

    onDepGridSelection: function(tablepanel, selections, options){
        this.getDepartmentList().down('#delete').setDisabled(selections.length === 0);
      
    },

    onDepGridClickDelete: function(button, e){
        //Ext.Msg.alert('hi', selections.name);       
        this.deleteRec(this.getDepartmentList().getSelectionModel().getSelection()[0]);
    },
    
    deleteRec: function(record, successCallback){
       var me = this;
        Ext.Msg.show({
            title: 'Delete Department?',
            msg: 'Are you sure you want to delete this??',
            buttons: Ext.Msg.YESNO,
            fn: function(response) {
                if(response === 'yes') {
                        me.getDepsStore().remove(record);
                        me.getDepsStore().reload();                   
                    }
            }
        }); 
    },

    onEditWinFormSave: function(button, e, options){
       // Ext.Msg.alert('hi', button.urlForm);
        var form = this.getDepForm('form').getForm(),
            editwin = this.getPopupWin(),
            grid = this.getDepartmentList(); // get the basic form
                
        if (form.isValid()) { // make sure the form contains valid data before submitting
            form.submit({
                success: function(form, action) {
                    editwin.close();
                    grid.getStore().reload();
                },
                failure: function(response) {
                    Ext.Msg.alert('Failed', response.responseText);
                }
            });
        } else { // display error alert if the data is invalid
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }

        // console.log('form values: ', form)
    },

    init: function(application) {
        this.control({

            "popupwin #save": {
                click: this.onEditWinFormSave
            },
            "departmentlist":{
                selectionchange: this.onDepGridSelection
            },
            "departmentlist #delete":{
                click: this.onDepGridClickDelete
            }
        });
    }
});