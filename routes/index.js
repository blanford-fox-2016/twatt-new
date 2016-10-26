var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')


router.get('/', controller.viewIndex)
router.post('/add', controller.addNewTweet)

module.exports = router;
