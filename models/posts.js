/**
 * Created by diegopc86 on 04/12/15.
 */
Posts = new Mongo.Collection('posts');

Posts.publish = function (post) {
    this.insert({
        message: post.message,
        date: new Date(),
        userId: Meteor.userId(),
        name: post.name
    });
}

Posts.list = function (userId) {
    return this.find({userId: userId});
}