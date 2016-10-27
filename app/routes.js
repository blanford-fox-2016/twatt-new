const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controller')

module.exports = router

router.get('/', mainController.showHome)
router.post('/search', mainController.searchTweet)
router.post('/tweet', mainController.postTweet)