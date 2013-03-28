Ext.define('Spicy.controller.common.Main', {
    extend: 'Ext.app.Controller',

    views: [
    	'Spicy.view.common.TopPanel',
    	'Spicy.view.common.LeftPanel',
    	'Spicy.view.common.MainTabs',
    	'Spicy.view.common.RightPanel',
    	'Spicy.view.common.Footer',
    	'Spicy.view.hr.Index'
    ],

    refs: [
    	{
    		ref: 'mainTabs',
    		selector: '#maintabs'
    	}
    ],

    openModule : function(menuoption){
		var me = this,
			maintabs = Ext.ComponentQuery.query('#maintabs')[0];

		// Ext.Msg.wait('Loading...');
		Ext.require(menuoption.controller,function(){
			// Ext.Msg.hide();

			// if(menuoption.maintab === 'true') {
				maintabs.removeAll();
			// } 

			var controller = me.application.controllers.get(menuoption.controller);
			
			if(!controller){ 
				controller = Ext.create(menuoption.controller, {
					id			: menuoption.controller,
					application	: me.application
				});

				controller.container = me.createContainer(menuoption);
				maintabs.add(controller.container);
				controller.addContent();

				me.application.controllers.add(controller);
				controller.init(me.application);
				controller.onLaunch(me.application);
			}else{
				if(controller.container.isDestroyed){
					controller.container = me.createContainer(menuoption);
					maintabs.add(controller.container);
					controller.addContent();
				}
			}

			maintabs.show();
			maintabs.setActiveTab(controller.container);
		});
	},

    createContainer : function(menuoption){
		return Ext.widget({
			xtype		: 'container',
			title		: menuoption.text,
			iconCls		: menuoption.iconCls,
		});
	},

    init: function(application) {
    	var me =this;

        me.control({
        	"leftpanel menuitem": {
        		click: me.openModule
        	},
        	'toolbar[itemId=mainmenu] button[itemId=startbutton] menuitem' : {
				click : me.openModule
			}

        });
    }
});