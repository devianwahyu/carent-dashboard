const express = require('express');
const page = require('../controllers/pageController');
const { getAuth } = require('../utils/user');

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (getAuth()) { return next(); }
  return res.redirect('/auth');
};

router.get('/auth', page.login);

router.use(isAuthenticated);
router.get('/cars', page.listCar);
router.get('/dashboard', page.dashboard);
router.get('/add', page.addCar);

module.exports = router;
