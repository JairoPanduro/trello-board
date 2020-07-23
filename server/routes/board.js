const express = require('express'); 
const router = express.Router(); 

const Board = require('../models/Board'); 
const User = require('../models/User'); 

const auth = (req, res, next) => {
  try {
    const user = await User.findOne({ token: req.headers.token });
    if (user) {
      return next();
    }
  } catch (err) {
    console.log(err.stack);
  }

  res.status(400).send({ message: 'Not authorized'});
};

router.get('/', auth, async (req, res) => {
  const board = await Board.find({});
  res.send(board);
});

module.exports = router;
