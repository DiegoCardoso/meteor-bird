/**
 * Created by diegopc86 on 06/12/15.
 */
Template.profile.helpers({
    editProfile: function () {
        return Session.get('editProfile');
    }
});