/**
 * Created by diegopc86 on 04/12/15.
 */
Template.post.events({
    "submit form": function (event, template) {
        event.preventDefault();
        var message = event.target.message,
            posts = Session.get('posts') || [];

        posts.push({
            message: message.value
        });

        Session.set('posts', posts);
        message.value = '';

    }
});