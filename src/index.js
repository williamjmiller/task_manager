const express = require('express');

const api = express();
api.listen(3000, () => {
  console.log('API is working');
});

// routes for the server (running locally on port 3000)

api.get('/', (req, res) => {
  res.send('Yo');
});
