//beforerequest( Ext.data.Connection conn, Object options, Object eOpts )
var MENUSYS = {
	controllers: [],
	menu: []
};

// Ext.Ajax.on('beforerequest', function(conn, options) {
// 	options.params = options.params || {};
//     options.params.authenticity_token = window.AUTHENTICITY_TOKEN;

// });

Ext.ClassManager.registerPostprocessor('init', function(className, fn, config) {
    var controllerName = className.split('.').pop();
    
    MENUSYS.controllers.push(controllerName);

    if (config.navTitle) {
        MENUSYS.menu.push({
            title: config.navTitle,
            iconCls: config.iconCls,
            tools:[{
                type: 'help',
                handler: function(){
                    Ext.Msg.alert('hi', 'This is the HRM menu' ); 
                }
            }],
            items: [{
                xtype: config.navItems,
                border: false,
                bodyStyle: 'background:none;'
            }]
        });    
    }
});
