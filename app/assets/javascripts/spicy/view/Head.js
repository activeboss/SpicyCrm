/*
 * File: app/view/Head.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Spicy.view.Head', {
    extend: 'Ext.container.Container',
    alias: 'widget.head',

    height: 49,
    style: 'padding: 10px 10px 10px 20px; background-color: #23427C;',
    layout: {
        align: 'stretch',
        type: 'hbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    html: '<img src="/assets/logo.png" alt="logo" width="151" height="25" border="0">',
                    itemId: 'logo',
                    width: 150
                },
                {
                    xtype: 'container',
                    flex: 1,
                    html: 'Login By Varit Onvnog | Logout',
                    itemId: 'login',
                    style: 'text-align: right; color: white;'
                }
            ]
        });

        me.callParent(arguments);
    }

});