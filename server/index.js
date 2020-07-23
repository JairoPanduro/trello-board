const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(
    'mongodb://localhost:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.post('/login', (req, res) => {
});

app.post('/register', (req, res) => {
});

app.post('/', (req, res) => {
});

const port = 3009;

app.listen(port, () => console.log('Server running...'));