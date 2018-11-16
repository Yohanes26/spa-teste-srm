//Install express server
const express = require('express');
const app = express();
var path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/spa-teste-srm'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);