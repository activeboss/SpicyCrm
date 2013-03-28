Ext.define('Spicy.view.company.ShareHolder', {
    extend: 'Ext.view.View',
    alias: 'widget.companyshareholder',

    itemSelector: '.companytable',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            itemTpl: [
            	'<table class="companytable">',
                '<tr>',
                    '<td class="r">{phonetype} : </td>',
                    '<td class="textbold">{number}</td>',
                '</tr>',
                '</table>'
            ]
        });

        me.callParent(arguments);
    }

});