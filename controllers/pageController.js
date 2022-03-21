const Car = require('../models/Car');

module.exports = {
  login: (req, res) => {
    res.render('login');
  },
  dashboard: async (req, res) => {
    const cars = await Car.findAll();
    const locals = {
      title: 'Dashboard',
      sidebarTitle: 'Dashboard',
      sidebarMenu: 'Dashboard',
      sidebarMenuLink: '/dashboard',
      layout: 'layouts/layout',
      cars,
    };
    res.render('dashboard', locals);
  },
  listCar: async (req, res) => {
    const cars = await Car.findAll();
    const locals = {
      title: 'Cars',
      sidebarTitle: 'Cars',
      sidebarMenu: 'List Car',
      sidebarMenuLink: '/cars',
      layout: 'layouts/layout',
      cars,
    };
    res.render('list-car', locals);
  },
  addCar: (req, res) => {
    const locals = {
      title: 'Add New Car',
      sidebarTitle: 'Cars',
      sidebarMenu: 'List Car',
      sidebarMenuLink: '/cars',
      sectionTitle: 'Add New Car',
      breadcrumb: 'Add New Car',
      breadcrumbLink: 'add',
      layout: 'layouts/layout',
    };
    res.render('form-car', locals);
  },
};
