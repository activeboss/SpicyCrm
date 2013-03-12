Ext.define('Spicy.view.user.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userform',

    border: 0,
    frame: false,
    autoScroll: true,
    bodyPadding: 10,
    bodyStyle: 'background-color: #dfe9f6;',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    title: 'User Information',
                    items: [
                        {
                            xtype: 'container',
                            frame: true,
                            itemId: 'photobox',
                            margin: '0 15 0 0',
                            style: 'text-align: center',
                            width: 100,
                            items: [
                                {
                                    xtype: 'image',
                                    itemId: 'photo',
                                    width: 100,
                                    src: '/assets/picture-icon.png'
                                },
                                {
                                    xtype: 'filefield',
                                    autoRender: true,
                                    width: 100,
                                    name: 'addpicture',
                                    buttonOnly: true,
                                    buttonText: 'Upload Picture',
                                    listeners: {
                                        change: {
                                            fn: me.onFilefieldChange,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            itemId: 'leftcolum',
                            layout: {
                                type: 'anchor'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'first_name',
                                    afterLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                                    ],
                                    fieldLabel: 'First Name',
                                    allowBlank: false,
                                    emptyText: 'First Name middle Name'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'last_name',
                                    afterLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                                    ],
                                    fieldLabel: 'Last Name',
                                    allowBlank: false,
                                    emptyText: 'Last Name'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'nick_name',
                                    fieldLabel: 'Nick Name'
                                },
                                {
                                    xtype: 'datefield',
                                    anchor: '100%',
                                    name: 'birthday',
                                    fieldLabel: 'Date of Birth',
                                    format: 'd/m/Y'
                                },
                                {
                                    xtype: 'timefield',
                                    anchor: '100%',
                                    name: 'timeofbirth',
                                    fieldLabel: 'Time Of Birth',
                                    format: 'H:i ',
                                    increment: 60
                                },
                                {
                                    xtype: 'radiogroup',
                                    itemId: 'gender',
                                    fieldLabel: 'Gender',
                                    allowBlank: false,
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            name: 'gender',
                                            boxLabel: 'Male',
                                            inputValue: 'Male'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name: 'gender',
                                            boxLabel: 'Female',
                                            inputValue: 'Female'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'radiogroup',
                                    fieldLabel: 'Marial Status',
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            name: 'marial_status',
                                            boxLabel: 'Single',
                                            inputValue: 'Single'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name: 'marial_status',
                                            boxLabel: 'Married',
                                            inputValue: 'married'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            itemId: 'rightcolum',
                            margin: '0 0 0 15',
                            layout: {
                                type: 'anchor'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'phone_main',
                                    fieldLabel: 'Main Phone',
                                    emptyText: '02 65835100 or 0813751832'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'phone_mobile',
                                    fieldLabel: 'Mobile'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'phone_home',
                                    fieldLabel: 'Home Phone'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    inputId: 'phone_work',
                                    name: 'phone_work',
                                    fieldLabel: 'Work Phone'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    inputId: 'phone_work',
                                    name: 'phone_ext',
                                    fieldLabel: 'Work Ext'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    inputId: 'phone_work',
                                    name: 'phone_fax',
                                    fieldLabel: 'Fax'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    defaults: {
                        labelAlign: 'top'
                    },
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    title: 'Login Information',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            inputType: 'password',
                            name: 'password',
                            fieldLabel: 'Password'
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margin: '0 0 0 20',
                            inputType: 'password',
                            name: 're_password',
                            fieldLabel: 'Re Type Password',
                            labelWidth: 120
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    anchor: '100%',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    title: 'E-Mail & Social Media',
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            itemId: 'emailleft',
                            layout: {
                                type: 'anchor'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'email',
                                    fieldLabel: 'E-Mail'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'email2',
                                    fieldLabel: 'Other E-Mail'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            itemId: 'emailrigth',
                            margin: '0 0 0 15',
                            layout: {
                                type: 'anchor'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'facebook',
                                    fieldLabel: 'Facebook'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    bodyPadding: 10,
                    bodyStyle: 'background-color: #dfe9f6;',
                    activeTab: 0,
                    plain: true,
                    items: [
                        {
                            xtype: 'panel',
                            frame: false,
                            layout: {
                                type: 'anchor'
                            },
                            bodyStyle: 'background-color: #dfe9f6;',
                            title: 'Adress Information',
                            items: [
                                {
                                    xtype: 'container',
                                    itemId: 'adressecontainer',
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            flex: 1,
                                            title: 'Main Address',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'adress_building',
                                                    fieldLabel: 'Building name'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'address_street',
                                                    fieldLabel: 'Street Name'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'adress_sub_district',
                                                    fieldLabel: 'Sub District'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'adress_district',
                                                    fieldLabel: 'District'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'adress_province',
                                                    fieldLabel: 'Province/City'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'postcode',
                                                    fieldLabel: 'PostCode'
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    anchor: '100%',
                                                    name: 'country',
                                                    fieldLabel: 'Country'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'fieldset',
                                            flex: 1,
                                            margins: '0 0 0 15',
                                            title: 'Other Address',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'adress_building',
                                                    fieldLabel: 'Building name'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'address_street',
                                                    fieldLabel: 'Street Name'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'adress_sub_district',
                                                    fieldLabel: 'Sub District'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'adress_district',
                                                    fieldLabel: 'District'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'adress_province',
                                                    fieldLabel: 'Province/City'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    anchor: '100%',
                                                    name: 'postcode',
                                                    fieldLabel: 'PostCode'
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    anchor: '100%',
                                                    name: 'country',
                                                    fieldLabel: 'Country'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            bodyStyle: 'background-color: #dfe9f6;',
                            title: 'Organization Information',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    title: 'Organization Information',
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            itemId: 'orgleft',
                                            layout: {
                                                type: 'anchor'
                                            },
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    anchor: '100%',
                                                    name: 'title',
                                                    fieldLabel: 'Title',
                                                    displayField: 'gender',
                                                    queryMode: 'local',
                                                    store: 'Gender',
                                                    valueField: 'value'
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    anchor: '100%',
                                                    name: 'department',
                                                    fieldLabel: 'Department',
                                                    displayField: 'name',
                                                    queryMode: 'local',
                                                    store: 'Deps',
                                                    valueField: 'name'
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    anchor: '100%',
                                                    name: 'manager',
                                                    fieldLabel: 'Manager',
                                                    displayField: 'gender',
                                                    queryMode: 'local',
                                                    store: 'Gender',
                                                    valueField: 'value'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            itemId: 'orgrigth',
                                            margin: '0 0 0 15',
                                            layout: {
                                                type: 'anchor'
                                            },
                                            items: [
                                                {
                                                    xtype: 'datefield',
                                                    anchor: '100%',
                                                    name: 'employ_date',
                                                    fieldLabel: 'Employment Date'
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    anchor: '100%',
                                                    name: 'employ_end',
                                                    fieldLabel: 'End Date'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            text: 'Cancel'
                        },
                        {
                            xtype: 'button',
                            itemId: 'save',
                            text: 'Save'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onFilefieldChange: function(filefield, value, options) {
        Ext.Msg.alert('hi', value);
    }

});