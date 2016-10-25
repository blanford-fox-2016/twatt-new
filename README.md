# twatt-recent
Using twitter api exercise with Node.js, Express & Postman

### User interface
Route | HTTP | Description |
------|------|------------|
`localhost:3000` | GET | View timeline
`localhost:3000/mentions` | GET | View mentions
`localhost:3000/mytweet` | GET | View user tweet
`localhost:3000/search?q=` | GET | Search tweet filter by query(add keyword after equal sign)



### API Routes (Test with Postman)
Route | HTTP | Description |
------|------|------------|
`localhost:3000/api/twatt/mytweet` | GET | View tweet made by user
`localhost:3000/api/twatt/timeline` | GET | View tweet on user timeline
`localhost:3000/api/twatt/mentions` | GET | View mentions on user
`localhost:3000/api/twatt/search?q=` | GET | Search tweet filter by query(add keyword after equal sign)


### Tree view Directory
```
.
├── app.js
├── bin
│   └── www
├── config
│   └── config.js
├── controller
│   ├── controller.js
│   └── controller_view.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── README.md
├── routes
│   ├── api.js
│   └── index.js
└── views
    ├── error.jade
    ├── index.jade
    ├── layout.jade
    ├── mention.jade
    ├── mytweet.jade
    └── search.jade

9 directories, 15 files


```

### Contributors
Copyright 2016 ahyanarizky
