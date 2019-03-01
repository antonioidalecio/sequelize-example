'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Profiles',
      [
        {
          userId: 1,
          fullname: 'Fulano da Silva',
          birthdate: new Date('1990/01/01'),
          gender: 'M',
          position: null
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {})
  }
}
