//const mongoose = require('mongoose');

//require express, connect db and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


//run on port 3001
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
