const { User } = require('../models')

class UserController {
	static list(req, res) {
		return User.findAll({
			include: [
				{
					association: User.Profile,
					attributes: ['id', 'fullname', 'gender', 'birthdate']
				},
				{
					association: User.Roles,
					attributes: ['id', 'roleName'],
					through: {
						attributes: [] // Ignore attributes of join table, https://github.com/sequelize/sequelize/issues/2974
					}
				}
			]
		})
			.then((users) => {
				res.send(users)
			})
			.catch((error) => {
				console.error(error)
				res.status(500).send(error)
			})
	}

	static getById(req, res) {
		const { id } = req.params
		const options = {
			include: [
				{
					association: User.Profile,
					attributes: ['id', 'fullname', 'gender', 'birthdate']
				},
				{
					association: User.Roles,
					attributes: ['id', 'roleName'],
					through: {
						attributes: [] // Ignore attributes of join table, https://github.com/sequelize/sequelize/issues/2974
					}
				}
			]
		}
		User.findById(id, options)
			.then((user) => {
				if (!user) {
					return res.status(404).send({
						message: 'The user with the given ID was not found'
					})
				}
				res.send(user)
			})
			.catch((error) => {
				console.error(error)
				res.status(500).send(error)
			})
	}

	static create(req, res) {
		const user = {
			username: req.body.username,
			password: req.body.password
		}

		User.create(user)
			.then((createdUser) => {
				res.status(201).send(createdUser)
			})
			.catch((error) => {
				console.error(error)
				res.status(500).send(error)
			})
	}

	static async addProfile(req, res) {
		const profile = {
			fullname: req.body.fullname,
			birthdate: req.body.birthdate,
			gender: req.body.gender,
			position: req.body.position
		}
		try {
			const user = await User.findById(req.params.id)
			if (!user) {
				return res.status(404).send({
					message: 'The user with the given ID was not found'
				})
			}
			const result = await user.setProfile(profile)
			console.log(result)
			res.send(result)
		} catch (error) {
			console.error(error)
			res.status(500).json(error)
		}
	}

	static update(req, res) {
		const userUpdates = {
			username: req.body.username,
			password: req.body.password
		}
		User.findById(req.params.id)
			.then((user) => {
				if (!user) {
					return res.status(404).send({
						message: 'The user with the given ID was not found'
					})
				}
				user.update(userUpdates).then(() => {
					res.send({
						message: 'User updated successfully'
					})
				})
			})
			.catch((error) => {
				console.error(error)
				res.status(500).send(error)
			})
	}

	static delete(req, res) {
		User.findById(req.params.id)
			.then((user) => {
				if (!user) {
					return res.status(404).send({
						message: 'The user with the given ID was not found'
					})
				}
				user.destroy().then(() => {
					res.send({
						message: 'User deleted successfully'
					})
				})
			})
			.catch((error) => {
				console.error(error)
				res.status(500).send(error)
			})
	}
}

module.exports = UserController
