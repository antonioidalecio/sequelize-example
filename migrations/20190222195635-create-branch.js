module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Branches', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			companyId: {
				type: Sequelize.INTEGER
			},
			branchName: {
				type: Sequelize.STRING
			},
			branchAddress: {
				type: Sequelize.STRING
			},
			branchCity: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Branches')
	}
}
