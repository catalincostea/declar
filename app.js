const express = require('express');
const app = express();
var path = require('path');

// google analytics section
// Get the module
var expressGoogleAnalytics = require('express-google-analytics');
// Insert your Google Analytics Id, Shoule be something like 'UA-12345678-9'
var analytics = expressGoogleAnalytics('UA-165347169-1');
//Add to express before your routes
app.use(analytics);


var fs = require('fs')
var morgan = require('morgan')
//var path = require('path')

//var app = express()

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))






app.use(express.static('.'))
app.get('', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(80, () => console.log('Server running on port 80!'))

/*const fs = require('fs')
const https = require('https')
https.createServer({
  key: fs.readFileSync('/etc/ssl/certs/ssl/server.key'),
  cert: fs.readFileSync('/etc/ssl/certs/ssl/server.cert')
}, app).listen(443, () => {
  console.log('Listening...')
})*/

