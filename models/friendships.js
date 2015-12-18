/**
 * Created by diegopc86 on 09/12/15.
 */
Friendships = new Mongo.Collection('friendships');

Friendships.follow = function (friendId) {
    this.insert({
        userId: Meteor.userId(),
        friendId: friendId
    });
};

Friendships.unfollow = function (friendId) {
    this.remove({
        userId: Meteor.userId(),
        friendId: friendId
    });
};

Friendships.isFollowing = function (friendId) {
    return this.findOne({
        userId: Meteor.userId(),
        friendId: friendId
    });
};