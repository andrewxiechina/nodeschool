var fs = require('fs')
var path = require('path')

module.exports = function(directory, filter, callback){
  fs.readdir(directory, (err, data) => {
    if(err) {
      return callback(err);
    }

    var newArr = data.filter(function(i){
      return path.extname(i) === "." + filter;
    });
    return callback(null, newArr);
  });
}
