# twatt

## Install express

```
npm install express-generator -g
express --ejs
npm install
```

## Intall OAuth

```
npm install oauth --save
```

## OAuth Usage

```javascript
var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'your application consumer key',
      'your application secret',
      '1.0A',
      null,
      'HMAC-SHA1'
    );

oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      'your user token for this app', //test user token
      'your user secret for this app', //test user secret
      function (e, data, res){
        if (e) console.error(e);
        console.log(require('util').inspect(data));
        done();
      });
  });
 ```

## Create config for Twitter OAuth

```javascript
module.exports = {
        'twitterAuth' : {
        'consumerKey'       : CONSUMER_KEY,
        'consumerSecret'    : CONSUMER_SECRET,
        'accessToken'       : ACCESS_TOKEN,
        'accessTokenSecret' : ACCESS_TOKEN_SECRET
    }
}
```

## API for Home

```
http://localhost:3000/api/home
```

## API for Search

```
http://localhost:3000/api/search?q=KEYWORD
```

## API for Timeline

```
http://localhost:3000/api/timeline
```
