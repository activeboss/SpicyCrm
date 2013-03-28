Ext.define('Spicy.controller.hr.Main', {
    extend: 'Ext.app.Controller',

    views: [
    	'hr.Index'
    ],

    addContent	: function(){
		this.container.add({
			xtype : 'hrindex',
			itemId: 'hrindex'
		});
	},
    init: function() {
        var me = this;

        me.control({

        });
    }
});