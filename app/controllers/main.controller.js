require('dotenv').config()

var OAuth = require('oauth'),
    http = require('http'),
    twitterAPI = require('node-twitter-api')

var twitter = new twitterAPI({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET
});

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
)

function showHome(req, res) {
    oauth.get(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?count=10`,
        process.env.USER_TOKEN, 
        process.env.USER_SECRET,            
        function(e, data, resj) {
            if (e) {
                console.error(e)
            } else {
                var result = JSON.parse(data)
                res.render('index', { my_tweet: result })
            }
        })
}

function searchTweet(req, res, next) {
    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?count=30&q=${req.body.word}`,
        process.env.USER_TOKEN,
        process.env.USER_SECRET,
        function(e, data, resj) {
            if (e) {
                console.error(e)
            } else {
                var result = JSON.parse(data)
                res.render('search', { searched_word: result })
            }
        })
}

function postTweet(req, res, next) {
    twitter.statuses("update", {
            status: req.body.tweet
        },
        process.env.USER_TOKEN,
        process.env.USER_SECRET,
        function(error, data, response) {
            if (error) {
                console.log('something is wrong!')
            } else {
                res.redirect('/')
            }
        }
    );
}

module.exports = {
    showHome: showHome,
    searchTweet: searchTweet,
    postTweet: postTweet
}
