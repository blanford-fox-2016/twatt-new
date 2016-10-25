'use strict'
let AuthTwitter = require('../helpers/oauthTwitter.js');
module.exports = {
  getUserTimeline: (req, res, next) => {
    let link = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

    AuthTwitter.getData(link, (data) => {
      data = JSON.parse(data)
      res.render('my_timeline', { title: 'User Timeline', data });
    });
  },

  getHomeTimeline: (req, res, next) => {
    let link = 'https://api.twitter.com/1.1/statuses/home_timeline.json';

    AuthTwitter.getData(link, (data) => {
      data = JSON.parse(data)
      res.render('index', { title: 'Home Timeline', data });
    });
  },

  searchTweet: (req, res, next) => {
    let link = `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}`;
    let keyword = req.query.q;
    AuthTwitter.getData(link, (data) => {
      data = JSON.parse(data).statuses;
      res.render('search', { data ,  keyword, title: `TWATT! - Search results for ${keyword}`});
    });
  },

  postTweet: (req, res, next) => {
    let link = `https: //api.twitter.com/1.1/statuses/update.json`;
    let status = req.body.tweet;

    AuthTwitter.postData(link, (data) => {
      data = JSON.parse(data).statuses;
      res.redirect('/my_timeline');
    });
  }
}
