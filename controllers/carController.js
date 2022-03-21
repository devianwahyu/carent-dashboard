const fs = require('fs');
const Car = require('../models/Car');

module.exports = {
  addCar: async (req, res) => {
    req.body.photo = res.locals.photoUrl;
    await Car.create(req.body);
    res.redirect('/cars');
  },
  deleteCarById: async (req, res) => {
    const fileName = await Car.findOne(req.params.id);
    const path = `public/images/uploads/${fileName}`;
    try {
      fs.unlinkSync(path);
      Car.deleteCarById(req.params.id);
    } catch (err) {
      console.error(err);
    } finally {
      res.redirect('/cars');
    }
  },
};
