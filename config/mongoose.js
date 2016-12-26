
/**
* Has db URI and uses mongoose to connect to the path.
*/
var mongoose = require('mongoose');
var MONGOLAB_GOLD_URI = 'mongodb://heroku_scdpdml4:l7va8t57di69b91mjrqni4hvk4@ds145168.mlab.com:45168/heroku_scdpdml4';

mongoose.connect(dbURI);

require('../app/models/user.model.js');
