Ext.define('Spicy.view.company.Detail', {
    extend: 'Ext.view.View',
    alias: 'widget.companydetail',
    moduleForm: 'companyform',

    itemSelector: '.companyinfo',
    overItemCls: 'item-hover',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
           itemTpl: [
                '<div class="companyinfo datalist">',
                '<div class="cultitle">Company Name  :</div>',
                '<div class="culvalue textbold">{companyname}</div>',
                '<div class="comedit btnbox" data-qtip="Edit"><img src="assets/icon/edit_task.png" width="16" height="16"/></div>',
                '</div>',
                '<div class="datalist">',
                '<div class="cultitle">Registrations Id :</div>',
                '<div class="culvalue textbold">{reg_no}</div>',
                '</div>',
                '<div class="datalist">',
                '<div class="cultitle">Tax Id :</div>',
                '<div class="culvalue textbold">{tax_id}</div>',
                '</div>',
                '<div class="datalist">',
                '<div class="cultitle">Registered Capital :</div>',
                '<div class="culvalue textbold">{reg_capital}</div>',
                '</div>'
            ]
        });

        me.callParent(arguments);
    },
    // listeners:{
    //     itemdblclick:function(view, record, item, index, event, options){//listen to the double click (step three)      
    //        Ext.Msg.alert('hi', 'jo');       
    //     }
    // }
});
