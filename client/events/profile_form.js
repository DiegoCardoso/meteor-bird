/**
 * Created by diegopc86 on 06/12/15.
 */
Template.profileForm.events({
    'submit form': function (event) {
        var form, name, about;
        event.preventDefault();

        form = event.target;
        name = form.name.value;
        about = form.about.value;

        Meteor.call('profileUpdate', {
            name: name,
            about: about
        });

        Session.set('editProfile', false);

    },

    'click .btn-block': function (event) {
        event.preventDefault();
        Session.set('editProfile', false);
    }
});