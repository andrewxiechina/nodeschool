const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err,data) => {
  if(err){
    console.log(err);
  }
  var extname = "md";

  var result = data;
  result.forEach((i) => {
    if(path.extname(i) === "." + extname){
      console.log(i);
    }
  });
});
