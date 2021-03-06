module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    companyId: DataTypes.INTEGER,
    branchName: DataTypes.STRING,
    branchAddress: DataTypes.STRING,
    branchCity: DataTypes.STRING
  })

  Branch.associate = function(models) {
    Branch.belongsTo(models.Company, {
      foreignKey: 'companyId'
    })
  }

  return Branch
}
