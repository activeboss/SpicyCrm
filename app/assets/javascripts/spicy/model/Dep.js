Ext.define('Spicy.model.Dep', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'created_at', type: 'auto'},
        { name: 'created_by', type: 'auto'},
        { name: 'update_at', type: 'auto'},
        { name: 'update_by', type: 'auto'}
    ]
   /* idProperty: '_id',
    proxy: {
		url: '/departments',
		type: 'rest',
		format: 'json',

		reader: {
	      root: 'data',
	      record: 'users',
	      successProperty: 'success',
	      messageProperty: 'errors'
	    },
	    writer: {
	      // wrap user params for Rails
	      //	getRecordData: function(record) {
	      //  return { data: record.data };
	      //}
    	}		
	} */
});