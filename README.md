# twatt-new

Make Twatt  New App (CLI) with Node.js & Express Generator

Username's twitter: [twitter.com/kenduigraha](kenduigraha)

## How to check

#### User's Timeline

> `curl -X GET "localhost:3000/oauth/timeline"`

### User's Home

> `curl -X GET "localhost:3000/oauth/home"`

### Search

> `curl -X GET "localhost:3000/oauth/search?q={search_here}"`

### Access User Interface
> `http://localhost:3000`

> `http://localhost:3000?q=hacktiv8`

### Postman

0. Input the URL
1. Click Authorization
2. Type: OAuth 1.0
3. Set Consumer Key : <consumer_key>
4. Set Consumer Secret : <consumer_secret>
5. Set Token : <token>
6. Set Token Secret : <token_secret>
7. Click Update Request
8. Click Send

************************************

## Installation:

1. Install Newest Node JS (v6.x.x LTS) : [Node.js](https://nodejs.org/en)
2. npm install -g express
3. npm install -g express-generator
4. express . (for express generator) & npm install
5. npm install --save express (for manual express)
6. npm install --save nodemon

Pretty Json : (Add '| prettyjson' after installation)

> npm install --save-dev prettyjson

Authentication Token User

> npm install --save twit

How to start server :

> npm start

************************************

# API References

## List of user routes :

| Route | HTTP | Description|
|-------|------|------------|
| `/oauth/home`| GET | Get home's twitter data |
| `/oauth/timeline`| GET | Get timeline's twitter data |

## HTTP Request's Example

| Action |Request|
|---------|-------|
| Read home's twitter | `curl -X GET "localhost:3000/oauth/home` |
| Read timeline's twitter | `curl -X GET "localhost:3000/oauth/timeline` |

************************************

## Directory :

```
.
├── README.md
├── app.js
├── bin
│   └── www
├── controller
│   ├── apiController.js
│   └── viewController.js
├── helper
│   ├── config.js
│   └── oauth.js
├── helpers
│   ├── config.js
│   └── oauth.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── api.js
│   └── index.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```
************************************

## Contributor

Ken Duigraha Putra &copy; 2016
