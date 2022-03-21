const express = require('express');
const page = require('./page');
const car = require('./car');
const auth = require('./auth');

const router = express.Router();

router.use('/auth', auth);
router.use('/', page);
router.use('/car', car);

module.exports = router;
