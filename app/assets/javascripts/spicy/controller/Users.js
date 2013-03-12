Ext.define('Spicy.controller.Users', {
    extend: 'Ext.app.Controller',
    alias: 'controller.usercon',

    models: [
        'Users'
    ],
    stores: [
        'Gender'
    ],
    views: [
        'user.Form',
        'user.Index'
    ]
});
