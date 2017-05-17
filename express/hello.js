var express = require('express');
const fs = require('fs');
var app = express();

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, data){
    var result = JSON.parse(data);
    res.json(result);
  })


})

app.listen(process.argv[2])
