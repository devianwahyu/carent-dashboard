var express = require('express');
const page = require('./page');
const car = require('./car');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/', page);
router.use('/car', car);

module.exports = router;
