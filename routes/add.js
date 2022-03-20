const express = require('express');
const path = require('path');
const multer = require('multer');
const Car = require('../models/Car');
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
const upload = multer({storage: storage});


router.get('/', (req, res) => {
  const locals = {
    title: 'Add New Car',
    sidebarTitle: 'Cars',
    sidebarMenu: 'List Car',
    sidebarMenuLink: '/car',
    sectionTitle: 'Add New Car',
    breadcrumb: 'Add New Car',
    breadcrumbLink: 'add',
    layout: 'layouts/layout'
  };
  res.render('form-car', locals);
});

router.post('/', upload.single('photo'), async (req, res) => {
  req.body.photo = photo;
  let newCar = await Car.create(req.body);
  res.redirect('/car');
});

module.exports = router;