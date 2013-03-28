Ext.define('Spicy.view.company.Adress', {
    extend: 'Ext.view.View',
    alias: 'widget.companyadress',

    // store: 'hr.Companys',
    trackOver: true,
    itemSelector: '.adress',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            itemTpl: [
                '<span class="textbold">{companyname}</span><br>',
                '{street1}<br>',
                '{street2}<br>',
                '{street3}<br>',
                '{city} {zip}<br>',
                '{country}'
            ]
        });

        me.callParent(arguments);
    }

});