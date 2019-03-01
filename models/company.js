module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    companyName: DataTypes.STRING,
    companyAddress: DataTypes.STRING,
    companyCity: DataTypes.STRING
  })

  Company.associate = function(models) {
    Company.hasMany(models.Branch, {
      foreignKey: 'companyId', // Nome da foreignKey que será salva na tabela `Branch`
      as: 'branches' // Nome utilizado posteriormente para obter as `branches` a partir de uma company, será gerado um método getBranches
    })
  }

  return Company
}
