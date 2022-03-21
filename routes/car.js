const express = require('express');
const path = require('path');
const multer = require('multer');
const car = require('../controllers/carController');

const router = express.Router();

// Upload middleware
let photo;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/uploads');
  },
  filename: (req, file, cb) => {
    photo = Date.now() + path.extname(file.originalname);
    cb(null, photo);
  },
});
const upload = multer({ storage });

const dataPass = (req, res, next) => {
  res.locals.photoUrl = photo;
  next();
};

router.post('/', upload.single('photo'), dataPass, car.addCar);
router.post('/delete/:id', car.deleteCarById);

module.exports = router;
