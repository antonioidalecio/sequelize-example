const { Profile, User } = require('../models')

class ProfileController {
	static list(req, res) {
		const options = {
			include: [Profile.User]
		}
		return Profile.findAll(options)
			.then((profiles) => {
				res.send(profiles)
			})
			.catch((error) => {
				console.error(error)
				res.status(500).send(error)
			})
	}

	static getById(req, res) {
		const { id } = req.params
		const options = {
			include: [Profile.User]
		}
		Profile.findById(id, options)
			.then((profile) => {
				if (!profile) {
					return res.status(404).send({
						message: 'The profile with the given ID was not found'
					})
				}
				res.send(profile)
			})
			.catch((error) => {
				console.error(error)
				res.status(500).send(error)
			})
	}

	static async create(req, res) {
		const profile = {
			fullname: req.body.fullname,
			birthdate: req.body.birthdate,
			gender: req.body.gender,
			position: req.body.position
		}

		try {
			const user = await User.findById(req.body.userId)
			if (!user) {
				return res.status(404).send({
					message: 'User not found'
				})
			}
			const createdProfile = await Profile.create(profile)
			const result = await user.setProfile(createdProfile)
			console.log(result)
			res.send(result)
		} catch (error) {
			console.error(error)
			res.status(500).send(error)
		}
	}

	// static update(req, res) {
	// 	const userUpdates = {
	// 		username: req.body.username,
	// 		password: req.body.password
	// 	}
	// 	User.findById(req.params.id)
	// 		.then((user) => {
	// 			if (!user) {
	// 				return res.status(404).send({
	// 					message: 'The user with the given ID was not found'
	// 				})
	// 			}
	// 			user.update(userUpdates).then(() => {
	// 				res.send({
	// 					message: 'User updated successfully'
	// 				})
	// 			})
	// 		})
	// 		.catch((error) => {
	// 			console.error(error)
	// 			res.status(500).send(error)
	// 		})
	// }

	// static delete(req, res) {
	// 	User.findById(req.params.id)
	// 		.then((user) => {
	// 			if (!user) {
	// 				return res.status(404).send({
	// 					message: 'The user with the given ID was not found'
	// 				})
	// 			}
	// 			user.destroy().then(() => {
	// 				res.send({
	// 					message: 'User deleted successfully'
	// 				})
	// 			})
	// 		})
	// 		.catch((error) => {
	// 			console.error(error)
	// 			res.status(500).send(error)
	// 		})
	// }
}

module.exports = ProfileController
