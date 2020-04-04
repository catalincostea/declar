const express = require('express');
const app = express();
var path = require('path');
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
