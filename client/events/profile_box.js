/**
 * Created by diegopc86 on 06/12/15.
 */
Template.profileBox.events({
    'click button': function (event) {
        event.preventDefault();
        Session.set('editProfile', true);
    }
});