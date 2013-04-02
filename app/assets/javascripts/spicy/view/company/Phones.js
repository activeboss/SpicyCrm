Ext.define('Spicy.view.company.Phones', {
    extend: 'Ext.view.View',
    alias: 'widget.companyphones',
    moduleForm: 'phoneform',
  
    // autoScroll: true,

    itemSelector: '.phonelist',
    overItemCls: 'phonelist-hover',
 	emptyText:'No Phones available',
    

    initComponent: function() {
        var me = this;

        me.addEvents(
            'editclick',
            'deleteclick'
        );

        Ext.applyIf(me, {

            itemTpl: [
            	'<tpl for =".">',
                '<div id="phonelist" class="phonelist datalist">',
  				'<span class="cultitle">{phonetype} :</span>',
  				'<span class="culvalue textbold">{number}</span>',
  				'<div class="removeicon delete"></div> ',
                '<div class="removeicon edit"></div>',
				'</div>',
                '</tpl>'
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        'itemclick': function(view, record, item, idx, event, opts) {
            if(event.target.className === 'removeicon edit') {
                this.fireEvent('editclick', view, record, item, idx, event, opts);
            };
            if(event.target.className === 'removeicon delete') {
                this.fireEvent('deleteclick', view, record, item, idx, event, opts);
            };
        }
    }
});