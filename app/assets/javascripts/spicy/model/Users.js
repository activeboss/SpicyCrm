Ext.define('Spicy.model.Users', {
    extend: 'Ext.data.Model',
    alias: 'model.users',

    fields: [
        {
            name: 'id',
            type: 'auto'
        },
        {
            name: 'name'
        },
        {
            name: 'first_name',
            type: 'string'
        },
        {
            name: 'last_name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'user_name'
        },
        {
            name: 'password'
        },
        {
            name: 'gender'
        },
        {
            name: 'prefix'
        },
        {
            name: 'birthday'
        },
        {
            name: 'zodiac'
        },
        {
            name: 'picture'
        },
        {
            name: 'title'
        },
        {
            name: 'department'
        },
        {
            name: 'reports_to'
        },
        {
            name: 'start_date'
        },
        {
            name: 'end_date'
        },
        {
            name: 'work_phone'
        },
        {
            name: 'phone_ext'
        },
        {
            name: 'phone_home'
        },
        {
            name: 'phone_mobile'
        },
        {
            name: 'phone_fax'
        },
        {
            name: 'adress_building'
        },
        {
            name: 'adress_street'
        },
        {
            name: 'adress_sub_district'
        },
        {
            name: 'adress_district'
        },
        {
            name: 'adress_province'
        },
        {
            name: 'postcode'
        },
        {
            name: 'country'
        },
        {
            name: 'employ_date'
        },
        {
            name: 'employ_end'
        },
        {
            name: 'employee_status'
        },
        {
            name: 'role'
        },
        {
            name: 'team_id'
        },
        {
            name: 'created_at'
        },
        {
            name: 'created_by'
        },
        {
            name: 'updated_at'
        },
        {
            name: 'update_by'
        },
        {
            name: 'status'
        },
        {
            name: 'del'
        }
    ]
});