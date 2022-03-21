const express = require('express');
const page = require('../controllers/pageController');
const router = express.Router();

router.get('/cars', page.listCar);
router.get('/dashboard', page.dashboard);
router.get('/add', page.addCar);

module.exports = router;