const { httpError } = require('../helpers/handleError')
const { getVehiclesQuery, getVehicleByDriverQuery, insertVehicle, updateOneVehicle, deleteOneVehicle } = require('../models/vehicles')

const getVehicles = async ( req, res) => {
    try {
       const response = await getVehiclesQuery()
       if(response.length !== 0)res.send(response)
       else res.send('No existen vehiculos registrados')
    } catch (err) {
        httpError(res, err)
    }
}

const getOneVehicle = async ( req, res) => {
    try {
       const response = await getVehicleByDriverQuery(req.params.id)
       if(response.length !== 0)res.send(response)
       else res.send('El conductor no posee vehiculos asignados')
    } catch (err) {
        httpError(res, err)
    }
}

const createVehicle = async ( req, res) => {
    try {
        const { driver_id, plate, model, type, capacity } = req.body

         //New Driver Data for Postman example
        /* 
        {
            "driver_id": "1",
            "plate": "AA26335",
            "model": "Mustang 2012",
            "type": "Sedan",
            "capacity": "5 Puestos"
        }
        */

        const newVehicle ={
            driver_id,
            plate,
            model,
            type,
            capacity
        }
        await insertVehicle(newVehicle)
        res.send(`Vehicle inserted ${JSON.stringify(newVehicle)}`)
    } catch (err) {
        httpError(res, err)
    }
}

const updateVehicle = async ( req, res) => {
    try {
        const { driver_id, plate, model, type, capacity } = req.body
        const vehicleId = req.params.id
        const newDataVehicle ={
            driver_id,
            plate,
            model,
            type,
            capacity
        }
        await updateOneVehicle(newDataVehicle,vehicleId)
        res.send(`Vehicle updated ${JSON.stringify(newDataVehicle)}`)
    } catch (err) {
        httpError(res, err)
    }
}

const deleteVehicle = async ( req, res) => {
    try {
        const vehicleId = req.params.id
        await deleteOneVehicle(vehicleId)
        res.send('Vehicle deleted')
    } catch (err) {
        httpError(res, err)
    }
}

module.exports = { getVehicles, getOneVehicle, createVehicle, updateVehicle, deleteVehicle }