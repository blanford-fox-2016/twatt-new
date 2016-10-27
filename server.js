var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = 3000,
	expressLayouts = require('express-ejs-layouts')

app.use(express.static(__dirname + '/public'))
app.use(expressLayouts)

app.use(require('./app/routes'))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port)