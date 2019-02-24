const { Role } = require('../models')

class RoleController {
  static list(req, res) {
    return Role.findAll({
      include: []
    })
  }
}

module.exports = RoleController
