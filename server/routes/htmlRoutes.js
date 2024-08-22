const path = require('path');
const express = require('express');
const app = express();

// serve
app.use(express.static(path.join(__dirname, '../client/dist')));

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );

  
