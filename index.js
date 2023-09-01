// import dependencies
const express = require('express')
const cors = require('cors')
const { logRequest } = require('./src/middleware')
require('dotenv').config()

// initial server/config
const app = express()
const PORT = process.env.PORT || 3000

// import router
const data = require('./src/route')

// middleware
app.use(cors(), express.json(), express.urlencoded({ extended: true }))
app.use(logRequest)

// router
app.get('', (req, res) => res.send({ status: true }))
app.use('/v1/data', data)

// start server
app.listen(PORT, () => console.log(`service running on port ${PORT}`))