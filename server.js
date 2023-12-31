const express = require('express')
const app = express()
const port = 3000
const userrouter = require('./router/users')
const connectDB = require('./config/db')
const { connect } = require('mongoose')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.use(userrouter)

  connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})