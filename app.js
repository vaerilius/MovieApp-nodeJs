const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.get('/results', function(req, res) {
   request('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb ', function(err, response, body) {
      if (!err && response.statusCode == 200) {
         const results = JSON.parse(body);
       
         // res.send(results['Search'][0]['Title']);
         res.send(results.Search[0].Title);
      }
   });
});

app.listen(port, () => {
   console.log(`Server started on port`);
});