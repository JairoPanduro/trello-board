const express = require('express'); 
const router = express.Router(); 

const User = require('../models/User'); 

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      return res.status(400).send({ message: 'User not found' });
    }
  
    if (user.validatePassword(req.body.password)) {
      return res.status(200).send({
        message: 'Logged In',
        token: user.token,
        email: user.email
      });
    }
  
    return res.status(400).send({ message: 'Wrong password '});
  } catch (err) {
    console.log(err.stack);
    return res.status(400).send({ message: 'Failed: ' + err.message });
  }
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.setPassword(password);
  try {
    await user.save();
    return res.status(201).send({ message: 'Created' });
  } catch (err) {
    console.log(err.stack);
    return res.status(400).send({ message: 'Failed: ' + err.message });
  }
});


router.get('/', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});


module.exports = router;
