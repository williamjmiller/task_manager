
//Middleware
const express = require('express');
const bodyParser = require('body-parser');

const api = express();

//connect api to html and css from task amanger application
api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
  console.log('API is working');
});

api.post('/add', (req, res) => {
  console.log(req.body);
  res.send('Working');
});
