Ext.define('Spicy.view.hr.Organization', {			
    extend: 'Ext.tree.Panel',
    alias: 'widget.hr-organization',

    // title: 'Organization Structure',
    border: false,
    store: 'Orgs',
    viewConfig: {
                plugins: {
                    ptype: 'treeviewdragdrop',
                    containerScroll: true
                }
            },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            
        });

        me.callParent(arguments);
    }

});