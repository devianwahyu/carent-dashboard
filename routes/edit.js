const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const locals = {
    title: 'Edit Car',
    sidebarTitle: 'Cars',
    sidebarMenu: 'List Car',
    sidebarMenuLink: '/car',
    sectionTitle: 'Edit Car',
    breadcrumb: 'Edit Car',
    breadcrumbLink: 'edit',
    layout: 'layouts/layout',
  };
  res.render('form-car', locals);
});

module.exports = router;
