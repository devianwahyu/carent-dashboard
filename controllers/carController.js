const Car = require('../models/Car');

module.exports = {
  addCar: async (req, res) => {
    req.body.photo = res.locals.photoUrl;
    await Car.create(req.body);
    res.redirect('/cars');
  },
  deleteCarById: async (req, res) => {
    Car.deleteCarById(req.params.id);
    res.redirect('/cars');
  },
};
