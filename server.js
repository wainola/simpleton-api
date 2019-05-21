require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Client = require('./db');
const router = require('./routes');

const { PORT } = process.env;

const app = express();

Client.connect()
  .then(() => console.log('Success on connection'))
  .catch(err => console.error('Some error on connection!', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((request, response, next) => {
  request.database = Client;
  next();
});
app.use(router);

// app.get('/test', (request, response) => response.send('Im Alive!!'));

app.listen(PORT, err => {
  if (err) {
    console.error('Some error happened', err);
    process.exit(1);
  }

  console.log('SERVER LISTENING ON PORT:', PORT);
});
