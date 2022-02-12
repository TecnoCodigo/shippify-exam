const { httpError } = require('../helpers/handleError')
const { getDriversQuery, insertDriver } = require('../models/driver')

const getDrivers = async ( req, res) => {
    try {
        const response = await getDriversQuery()
        if(response.length !== 0)res.send(response)
        else res.send('No existen conductores registrados')
     } catch (err) {
         httpError(res, err)
     }
}

const createDriver = async ( req, res) => {
    try {
        const { company_id, city, first_name, last_name, email, phone, avatar_url,status } = req.body

        //New Driver Data for Postman example
        /* 
        {
            "company_id": 1,
            "city": 6050,
            "first_name": "Ronald",
            "last_name": "Vizcaya",
            "email": "tecnocodigoyt@gmail.com",
            "phone": "+584121956381",
            "avatar_url": "",
            "status": "active"
        }
        */

        const newDriver ={
            company_id,
            city,
            first_name,
            last_name,
            email,
            phone,
            avatar_url,
            status
        }
        await insertDriver(newDriver)
        res.send('Driver inserted')
    } catch (err) {
        httpError(res, err)
    }
}

module.exports = { getDrivers, createDriver}