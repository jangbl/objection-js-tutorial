const User = require('../db/models/user');

class UserDAO {
  findById(id) {
    return User.query().findById(id).withGraphFetched('channel');
  }
}

module.exports = new UserDAO();
