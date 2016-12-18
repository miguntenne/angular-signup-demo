
/**
* Has db URI and uses mongoose to connect to the path.
*/
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/angularSimpleDemo';

mongoose.connect(dbURI);

require('../app/models/user.model.js');
