/**
 * Created by diegopc86 on 04/12/15.
 */
Template.post.events({
    "submit form": function (event, template) {
        event.preventDefault();
        var message = event.target.message;

        if (!message.value) return;

        Posts.publish(message.value);

        message.value = '';

    }
});