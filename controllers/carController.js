const path = require('path');
const multer = require('multer');
const Car = require('../models/Car');

module.exports = {
  addCar: async (req, res) => {
    req.body.photo = res.locals.photoUrl;
    let newCar = await Car.create(req.body);
    res.redirect('/cars');
  },
  deleteCarById: async (req, res) => {
    const deleted = Car.deleteCarById(req.params.id);
    res.redirect('/cars');
  },
};