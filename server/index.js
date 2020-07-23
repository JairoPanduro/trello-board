const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./routes/user'); 
const board = require('./routes/board'); 

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(
    'mongodb://localhost:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use('/user', user);
router.use('/board', board);

const port = 3009;

app.listen(port, () => console.log('Server running...'));