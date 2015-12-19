/**
 * Created by diegopc86 on 06/12/15.
 */
Router.route('/', function () {
    this.render('home', {
        data: function () {
            var _id = Meteor.userId();
            return {
                posts: Posts.list(_id),
                followers: Friendships.followers(_id),
                followings: Friendships.followings(_id)
            }
        }
    });
}, { name: 'home' });