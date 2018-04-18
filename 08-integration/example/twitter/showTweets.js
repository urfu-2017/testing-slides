const getTweets = require('./getTweets');

module.exports = function showTweets() {
    const tweets = getTweets('#urfu-testing-2017');

    tweets.forEach(tweet => console.log(tweet.text));
};