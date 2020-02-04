const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/view'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/view/index.html'));
});

// SERVER
app.listen(process.env.PORT || 8080);