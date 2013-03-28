Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    autoCreateViewport: true,
    name: 'Spicy',
    appFolder: '/assets/spicy',
    controllers: [
        'Spicy.controller.common.Main',
        'Spicy.controller.hr.Navigations'
    ]
});