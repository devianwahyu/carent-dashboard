const express = require('express');
const Car = require('../models/Car');
const router = express.Router();

router.get('/', async (req, res) => {
  const cars = await Car.findAll();
  const locals = {
    title: 'Cars',
    sidebarTitle: 'Cars',
    sidebarMenu: 'List Car',
    sidebarMenuLink: '/car',
    layout: 'layouts/layout',
    cars,
  };
  res.render('list-car', locals);
});

module.exports = router;