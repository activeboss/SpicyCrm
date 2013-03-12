Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    autoCreateViewport: true,
    name: 'Spicy',
    appFolder: '/assets/spicy',
    controllers: [
        'Navigation',
        'Users',
        'Departments',
        'Admin' 
    ]
});