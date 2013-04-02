Ext.define('Spicy.view.company.Detail', {
    extend: 'Ext.view.View',
    alias: 'widget.companydetail',

    moduleForm: 'companyform',

    itemSelector: '.companyinfo',
    overItemCls: 'items-hover',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
           itemTpl: [
                '<div class="companyinfo">',
                '<span class="cultitle">Company Name  :</span>',
                '<span class="culvalue textbold">{companyname} </span>',
                '<div class="removeicon edit"></div>',
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
    listeners:{

        // 'itemmouseenter': function(view, record, item, idx, event, opts) {
        //     div = Ext.Element.get('ciconbox');
        //     div.removeCls('x-hidden');
        //     console.log(item);
        // },
        // 'itemmouseleave': function(view, record, item, idx, event, opts) {
        //     div = Ext.Element.get('ciconbox');
        //     div.addCls('x-hidden');
        // }    
    }
});
