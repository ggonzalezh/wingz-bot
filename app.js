const Twit = require('twit');
const { frases } = require("./frases");

var twitter = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    strictSSL: true
})
var stream = twitter.stream('statuses/filter', { track: ['@WingzBOT'] });
stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {
    var name = tweet.user.screen_name;
    var nameID = tweet.id_str;
    var reply = `@${name} ${frases[Math.floor(Math.random() * frases.length)]}`;
    var params = {
        status: reply,
        in_reply_to_status_id: nameID
    };

    twitter.post('statuses/update', params, function (err, data, response) {
        if (err !== undefined) {
            console.log(err);
        }
    })
};