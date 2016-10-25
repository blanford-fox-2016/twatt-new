'use strict'
var OAuth = require('oauth');
var config = require('../config/config.js')
var link_user = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
var link_home = 'https://api.twitter.com/1.1/statuses/home_timeline.json'
var link_mention = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json'
var link_search = 'https://api.twitter.com/1.1/search/tweets.json?q='
var link_update = 'https://api.twitter.com/1.1/statuses/update.json?status='


let action = function(target_url, callback){
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    config.consumer_key, // consumerKey
    config.consumer_secret, // consumerSecret
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  oauth.get(
      target_url,
    config.user_token, //test user token
    config.user_secret, //test user secret
    function (e, data, res){
      if (e) console.error(e);
      callback(data)
    });
}


module.exports = {
  mytweet: function(req, res, next){
    action(link_user, function(data){
      var tweet = JSON.parse(data)
      res.render('mytweet', {tweet})
    })
  },
  timeline: function(req, res, next){
    action(link_home, function(data){
      var tweet = JSON.parse(data)
      res.render('index', {tweet})
    })
  },
  mentions: function(req, res, next) {
    action(link_mention, function(data){
      var tweet = JSON.parse(data)
      res.render('mention', {tweet})
    })
  },
  search: function(req, res, next){
    action(link_search+req.query.search, function(data) {
      var tweet = JSON.parse(data)
      res.render('search', {tweet: tweet.statuses})
    })
  },
  updateStatus: function(req, res, next){
    console.log('action');
    console.log(req.query);
    action(link_search+req.query.update, function(data) {
      var tweet = JSON.parse(data)
      console.log(tweet);
      res.render('mytweet')
    })
  }

}
