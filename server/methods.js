/**
 * Created by diegopc86 on 09/12/15.
 */
Meteor.methods({
    followUser: function (friendId) {
       Friendships.follow(friendId);
    },

    unfollowUser: function (friendId) {
        Friendships.unfollow(friendId);
    },

    profileUpdate: function(profile) {
        Meteor.users.update({ _id: Meteor.userId() },
            {
                $set: {
                    'profile.name': profile.name,
                    'profile.about': profile.about
                }
            });

        Posts.update( { userId: Meteor.userId() },
            {
                $set: {name : profile.name}
            },
            { multi: true});
    },

    publishPost: function (post) {
        Posts.publish(post);
    }

});