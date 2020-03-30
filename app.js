const express = require('express');
const app = express();
var path = require('path');
app.use(express.static('.'))
app.get('', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(80, () => console.log('Server running on port 80!'))
