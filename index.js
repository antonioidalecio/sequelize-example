const app = require('express')()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const database = require('./database')

const routes = require('./routes')

dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)

const port = process.env.PORT || 3001

database.sequelize
  .sync()
  .then(() => {
    app.listen(port, error => {
      if (error) {
        return console.error(
          `An error occurred while trying to listen to the port ${port}`,
          error
        )
      }
      console.log(`Listening on port ${port}`)
    })
  })
  .catch(error => {
    console.error('An error occurred while connecting to the database', error)
  })
