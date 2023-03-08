// Express
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const start = async (req, res) => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
