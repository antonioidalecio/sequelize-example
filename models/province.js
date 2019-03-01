module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define('Province', {
    provinceCode: DataTypes.STRING,
    provinceName: DataTypes.STRING
  })
  Province.associate = function(models) {
    Province.hasMany(models.City, {
      foreignKey: 'provinceCode',
      sourceKey: 'provinceCode' // Nome da propriedade que será utilizada como foreignKey, por default é utilizada o id
    })
  }
  return Province
}
