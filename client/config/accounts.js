/**
 * Created by diegopc86 on 05/12/15.
 */

Accounts.ui.config({
   extraSignupFields: [{
       fieldName: 'name',
       fieldLabel: 'Nome'
   }],
    requestPermissions: {
        facebook: [
            'email',
            'user_about_me'
        ]
    }
});