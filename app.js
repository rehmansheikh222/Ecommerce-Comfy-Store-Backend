// Dotenv
require('dotenv').config()
// Express
const express = require('express')
const app = express()

// Database
const connectDB = require('./db/connect')

const port = process.env.PORT || 5000

const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
