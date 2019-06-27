var User = module.parent.require("./user");

var Plugin = {
    filter: function(postData) {
        // do something with postData here
        console.log("[filter:post.save] postData:", postData);
        User.exists("foobar", function(err, exists) {
            if (err) {
                console.log('[error]');
            }

            console.log('[exists]:', exists);
        });
    },
    emailme: function(postData) {
        console.log("[action:post.save] postData:", postData);
    }
};

module.exports = Plugin;