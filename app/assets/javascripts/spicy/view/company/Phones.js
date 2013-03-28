Ext.define('Spicy.view.company.Phones', {
    extend: 'Ext.view.View',
    alias: 'widget.companyphones',
    moduleForm: 'phoneform',

    itemSelector: '.phonelist',
    overItemCls: 'item-hover',
 	emptyText:'No Phones available',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tpl: [
            	'<tpl for =".">',
                '<div class="phonelist datalist">',
  				'<div class="cultitle">{phonetype} :</div>',
  				'<div class="culvalue textbold">{number}</div>',
  				'<div class="btnbox"><img src="assets/icon/edit_task.png" width="16" height="16"/></div>',
				'</div>',
                '</tpl>'
            ]
        });

        me.callParent(arguments);
    }
});