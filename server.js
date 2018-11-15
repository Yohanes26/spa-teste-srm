//Install express server
const express = require('express');
const app = express();
var path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/spa-teste-srm'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);