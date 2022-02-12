const express = require('express')
const router = express.Router()
const { getCompanies, createCompany } = require('../controllers/company')

router.get('/', getCompanies)

router.post('/',createCompany)


module.exports = router