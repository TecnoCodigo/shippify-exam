const express = require('express')
const router = express.Router()
const { getDrivers, createDriver } = require('../controllers/driver')

router.get('/', getDrivers)

router.post('/',createDriver)


module.exports = router