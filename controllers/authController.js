const {
  validEmail, validPassword, setAuth, getAuth,
} = require('../utils/user');

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;
    if (email == validEmail && password == validPassword) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    if (getAuth()) {
      res.redirect('/dashboard');
    } else {
      res.redirect('/auth');
    }
  },
  logout: (req, res) => {
    setAuth(false);
    res.redirect('/auth');
  },
};
