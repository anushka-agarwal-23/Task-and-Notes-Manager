const express = require('express')

const { db } = require('./db')
const taskRoute = require('./routes/task-api')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/tasks', taskRoute)

db.sync()
  .then(() => {
    app.listen(process.env.PORT || 6543)
  })
  .catch((err) => {
    console.error(err)
  })