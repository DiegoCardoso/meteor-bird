/**
 * Created by diegopc86 on 09/12/15.
 */
Template.followButton.helpers({
    canFollow: function () {
        var userId = Meteor.userId();
        return userId && Session.get('currentUserId') !== userId;
    },

    isFollowing: function () {
        return Session.get('isFollowing');
    }
});