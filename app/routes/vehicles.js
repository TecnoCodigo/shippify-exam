const express = require('express')
const router = express.Router()
const { getVehicles, getOneVehicle, createVehicle, updateVehicle, deleteVehicle } = require('../controllers/vehicles')

router.get('/', getVehicles)

router.get('/:id', getOneVehicle)//EJEMPLO -> localhost:PORT/api/vehicles/1

router.post('/',createVehicle)

router.patch('/:id',updateVehicle)

router.delete('/:id',deleteVehicle)


module.exports = router