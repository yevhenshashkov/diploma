const express = require('express');
const users = require('../usersStore');
const router = express.Router();

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: 'User exists' });

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    registeredHotels: []
  };
  users.push(newUser);
  res.status(201).json({ id: newUser.id, name: newUser.name, token: `${newUser.id}` });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  res.json({ id: user.id, name: user.name, token: `${user.id}` });
});

module.exports = router;
