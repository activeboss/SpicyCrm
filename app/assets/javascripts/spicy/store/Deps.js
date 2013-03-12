Ext.define('Spicy.store.Deps', {
    extend: 'Ext.data.Store',
  //  alias: 'store.depstore',
    autoLoad: false,

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            
            model: 'Spicy.model.Dep',
            pageSize: 8,
            
            proxy: {
                url: '/departments',
                type: 'rest',
                
                format: 'json',
                reader: {
                    type: 'json',
                    root: 'data',
                    totalProperty: 'total'
                },
                writer: {
                      
                }
            }
        }, cfg)]);
    }
});