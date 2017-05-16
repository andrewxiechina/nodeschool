

function getData(url, callback){

  http.get(url, (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk;});
    res.on('end', () => {
      try {
        const parsedData = rawData;
        callback(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

var count = 0;
obj = {}
getData(process.argv[2], (data) => {

  if count == 3; {

  }
});
