const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const demoUser = {
  id: 1,
  username: 'omer',
  password: '123456',
  role: 'student'
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== demoUser.username || password !== demoUser.password) {
    return res.status(401).json({
      success: false,
      message: 'Kullanici adi veya sifre hatali.'
    });
  }

  const token = jwt.sign(
    {
      id: demoUser.id,
      username: demoUser.username,
      role: demoUser.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.json({
    success: true,
    message: 'Giris basarili.',
    token
  });
});

module.exports = router;
