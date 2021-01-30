const userDAO = require('../dao/user');

class UserService {
  getUser(id) {
    return userDAO.findById(id);
  }
}

module.exports = new UserService();
