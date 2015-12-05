/**
 * Created by diegopc86 on 04/12/15.
 */
Template.timeline.helpers({
    posts: function () {
        return Posts.find()
            ;
    }
});