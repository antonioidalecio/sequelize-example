module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleName: DataTypes.STRING
  })

  Role.associate = function(models) {
    Role.Users = Role.belongsToMany(models.User, {
      foreignKey: 'roleId',
      as: 'users',
      through: models.UserRole
    })
  }

  return Role
}
