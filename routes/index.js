var express = require('express');
var router = express.Router();
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'wQMolOGrCtlr85P60YfBMgs9D',
  consumer_secret:      '5zx2m7CI5bjQfSlrSTrtiw5hlWyVN8bMsfIHggLZaCt4uIYW07',
  access_token:         '326746118-1kgr2KZmfbB3YDcM6ygd17OiZVEXX5dm6wT5IoDw',
  access_token_secret:  '7pg7iCTk1b4DgcGmA0qdJ4R5m0ck9FShh7yc4pG0WjJcR',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'twatt-new' });
});

router.post('/add', function(req, res, next){
    T.post('statuses/update', { status: req.body.input_tweet }, function(err, data, response) {
      console.log(data)
      res.redirect('/')
    })
})



module.exports = router;
