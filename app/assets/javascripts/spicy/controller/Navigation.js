Ext.define('Spicy.controller.Navigation', {
    extend: 'Ext.app.Controller',
    alias: 'controller.navigation',
    
    views: [
        'PopupWin'
    ],

    refs: [
        {
            ref: 'LeftPanel',
            selector: 'lefpanel'
        },
        {
            ref: 'MainPanel',
            selector: 'mainpanel'
        },
        {
            ref: 'PopupWin',
            selector: 'popupwin'
        }
    ],

    onLeftMenuitemClick: function(item, e, options) {
        this.loadMain(item);
    },
    //On click add button in tool bar and open form relected to thate view
    onAddToolButtonClick: function(button, e, options) {
        var win = Ext.create('widget.popupwin', {
            title: button.text,
            icon: button.icon,
            items: [
                {
                    xtype: button.urlForm
                }
            ]
        });
        win.show();          
    },

    onAddToolbarButtonClick: function(button, e, options) {
        this.onTabOpen(button);
    },

    onEditWinCancelButtonClick: function(button, e, options) {
        this.getPopupWin().destroy();
    },

    onFormCancelClick: function(button, e, options) {
        //Ext.Msg.alert('hi', button.text);
        this.getMainPanel().getActiveTab().destroy();
    },

    loadMain: function(item) {
        var mainpanel = this.getMainPanel(),
            active = mainpanel.items.first(),
            navTitle = item.text,
            navUrl = item.itemId;

        if (!active) {
            mainpanel.add({
                xtype: navUrl,
                title: navTitle

            });
        } else {

            active.tab.setText(navTitle);

            mainpanel.removeAll();
            mainpanel.add({
                xtype: navUrl,
                title: navTitle

            });
        }
        mainpanel.setActiveTab(0);
    },

    onTabOpen: function(button) {

        var mainpanel = this.getMainPanel(),
            items = [],
            item;

        item = mainpanel.add({
            inTab: true,
            xtype: 'userform',
            title: button.text,
            closable: true,
            icon: button.icon
        });
        mainpanel.setActiveTab(item);
    },

    init: function(application) {
        this.control({
            "leftpanel menuitem": {
                click: this.onLeftMenuitemClick
            },
            "toolbar #add": {
                click: this.onAddToolbarButtonClick
            },
            "toolbar #addpop": {
                click: this.onAddToolButtonClick
            },
            "popupwin #cancel": {
                click: this.onEditWinCancelButtonClick
            },
            "form #cancel": {
                click: this.onFormCancelClick
            }
        });
    }

});