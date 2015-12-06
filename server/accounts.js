/**
 * Created by diegopc86 on 05/12/15.
 */
Accounts.onCreateUser(function (options, user) {
   user['profile'] = options.profile;
    return user;
});
