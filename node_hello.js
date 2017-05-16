var dir  = require('./dir.js')
var directory = process.argv[2]
var filterStr = process.argv[3]

dir(directory, filterStr, function(err, list){
  if (err) console.error('There was an error:', err);

  list.forEach((item) => {
    console.log(item);
  })
});
