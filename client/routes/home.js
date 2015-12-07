/**
 * Created by diegopc86 on 06/12/15.
 */
Router.route('/', function () {
    this.render('home', {
        data: function () {
            return {
                posts: Posts.list(Meteor.userId())
            }
        }
    });
}, { name: 'home' });