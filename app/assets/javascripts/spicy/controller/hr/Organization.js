Ext.define('Spicy.controller.hr.Organization', {
    extend: 'Ext.app.Controller',

    stores:[],
    models:[],
    views: [],

    refs: [{
  	   ref: '',
  	   selector: ''
    }],

    addContent	: function(){
		this.container.add({
			// xtype : 'clients.main',
			// itemId: 'clientmain'
		});
	},
	
    init: function() {
        var me = this;

        me.control({

        });
    }
});