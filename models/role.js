module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleName: DataTypes.STRING
  })

  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      foreignKey: 'roleId',
      as: 'users',
      through: 'UserRole'
    })
  }

  return Role
}
