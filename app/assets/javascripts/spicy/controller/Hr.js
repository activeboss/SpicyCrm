Ext.define('Spicy.controller.Hr', {
    extend: 'Ext.app.Controller',

    stores:['Orgs'],
    models:[],
    views: ['hr.Index', 'hr.Organization', 'hr.EmployeeList'],

    refs: [{
  	   ref: '',
  	   selector: ''
    }],

    

    init: function() {
        this.control({

        });
    }
});