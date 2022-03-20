const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const locals = {
    title: 'Cars',
    sidebarTitle: 'Cars',
    sidebarMenu: 'List Car',
    layout: 'layouts/layout'
  };
  res.render('list-car', locals);
});

module.exports = router;