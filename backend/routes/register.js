const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

router.post('/:id', authenticate, (req, res) => {
  const courseId = parseInt(req.params.id);

  if (!req.user.registeredHotels.includes(courseId)) {
    req.user.registeredHotels.push(courseId);
  }

  res.json({ message: 'You are registered for this class!' });
});

module.exports = router;
