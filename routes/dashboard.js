const express = require('express');
const router = express.Router();

/* dashboard page */
router.get('/', (req, res) => {
  const locals = {
    title: 'Dashboard',
    sidebarTitle: 'Dashboard',
    sidebarMenu: 'Dashboard',
    layout: 'layouts/layout'
  };
  res.render('dashboard', locals);
});

module.exports = router;