var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});
var config = require('./config/config');

// Adds DB config file
require('./config/mongoose');

// Adds API routes and port for listening
var port = config.PORT;
var apiRoutes = require('./app/routes');

// Parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sets new app session.
app.use(cookieParser());
app.use(expressSession({
    secret: config.SECRET,
    cookie: {maxAge: 60 * 60 * 1000},
    store: new mongoStore({
        mongooseConnection: mongoose.connection,
        collection: 'sessions'
    })
}));

// Sets API routes file
app.use('/api', apiRoutes);
app.use('/', express.static(__dirname + '/public'));

app.listen(port);
exports = module.exports = app;
