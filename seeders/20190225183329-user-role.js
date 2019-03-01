'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'UserRoles',
      [
        {
          roleId: 1,
          userId: 1
        },
        {
          roleId: 2,
          userId: 1
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserRoles', null, {})
  }
}
