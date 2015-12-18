/**
 * Created by diegopc86 on 04/12/15.
 */
Template.post.events({
    "submit form": function (event, template) {
        event.preventDefault();
        var message = event.target.message,
            name = Meteor.user().profile.name;

        if (!message.value) return;

        Meteor.call('publishPost', {
            message: message.value,
            name: name
        });

        message.value = '';

    }
});