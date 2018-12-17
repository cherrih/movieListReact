var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(port, () => console.log('listening on: ', port));