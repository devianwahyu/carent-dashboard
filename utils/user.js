const validEmail = 'ggadmin@gmail.com';
const validPassword = '123456';
let isAuthenticated = false;

module.exports = {
  validEmail,
  validPassword,
  setAuth: (value) => {
    isAuthenticated = value;
  },
  getAuth: () => isAuthenticated,
};
