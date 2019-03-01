const { Role, User } = require('../models')

class RoleController {
	static async list(req, res) {
		const options = {
			include: [
				{
					association: Role.Users,
					through: {
						attributes: [] // Ignore attributes of join table, https://github.com/sequelize/sequelize/issues/2974
					}
				}
			]
		}
		try {
			const roles = await Role.findAll(options)
			res.send(roles)
		} catch (error) {
			console.error(error)
			res.status(500).send(error)
		}
	}

	static async getById(req, res) {
		const { id } = req.params
		try {
			const role = await Role.findById(id)
			if (!role) {
				return res.status(404).send({
					message: 'Role not found'
				})
			}
			res.send(role)
		} catch (error) {
			console.error(error)
			res.status(500).send(error)
		}
	}

	static async add(req, res) {
		const role = {
			roleName: req.body.roleName
		}
		try {
			const createdRole = await Role.create(role)
			res.status(201).send(createdRole)
		} catch (error) {
			console.error(error)
			res.status(500).send(error)
		}
	}

	static async addUser(req, res) {
		const { userId, roleId } = req.body
		try {
			const role = await Role.findById(roleId)
			if (!role) {
				return res.status(404).send({
					message: 'Role not found'
				})
			}
			const user = await User.findById(userId)
			if (!user) {
				return res.status(404).send({
					message: 'User not found'
				})
			}
			const isAlreadyAssociated = await role.hasUser(user)
			if (isAlreadyAssociated) {
				return res.status(400).send({
					message: 'This user is already associated with this role'
				})
			}
			const result = await role.addUser(user).spread((results) => results)
			return res.send(result)
		} catch (error) {
			console.error(error)
			res.status(500).send(error)
		}
	}

	static async update(req, res) {
		const roleUpdates = {
			roleName: req.body.roleName
		}
		try {
			const role = await Role.findById(req.params.id)
			if (!role) {
				return res.status(404).send({
					message: 'The role with the given ID was not found'
				})
			}
			const updatedRole = await role.update(roleUpdates)
			res.send(updatedRole)
		} catch (error) {
			console.error(error)
			res.status(500).send(error)
		}
	}

	static async delete(req, res) {
		const { id } = req.params
		try {
			const role = await Role.findById(id)
			if (!role) {
				return res.status(404).send({
					message: 'The role with the given ID was not found'
				})
			}
			await role.destroy()
			res.send({
				message: 'Role deleted successfully'
			})
		} catch (error) {
			console.error(error)
			res.status(500).send(error)
		}
	}
}

module.exports = RoleController
