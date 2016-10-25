'use strict'
let AuthTwitter = require('../helpers/oauthTwitter.js');

module.exports = {

  getUserTimeline: (req, res, next) => {
    let link = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

    AuthTwitter.getData(link, (data) => {
      res.json(JSON.parse(data));
    });
  },

  getHomeTimeline: (req, res, next) => {
    let link = 'https://api.twitter.com/1.1/statuses/home_timeline.json';

    AuthTwitter.getData(link, (data) => {
      res.json(JSON.parse(data));
    });
  },

  searchTweet: (req, res, next) => {
    let link = `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}`;

    AuthTwitter.getData(link, (data) => {
      data = JSON.parse(data).statuses;
      res.json(data);
    });
  }
}
