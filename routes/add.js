const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const locals = {
    title: 'Add New Car',
    sidebarTitle: 'Cars',
    sidebarMenu: 'List Car',
    sectionTitle: 'Add New Car',
    breadcrumb: 'Add New Car',
    breadcrumbLink: 'add',
    layout: 'layouts/layout'
  };
  res.render('form-car', locals);
});

module.exports = router;