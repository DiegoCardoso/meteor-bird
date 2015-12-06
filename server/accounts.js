/**
 * Created by diegopc86 on 05/12/15.
 */
Accounts.onCreateUser(function (options, user) {

    var facebook = user.services.facebook;

    if (facebook) {
        user['profile'] = {
            name: facebook.name
        };
    } else {
        user['profile'] = options.profile;
    }

    return user;
});
