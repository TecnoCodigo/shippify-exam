const { httpError } = require('../helpers/handleError')
const { getCompaniesQuery, insertCompany } = require('../models/company')

const getCompanies = async ( req, res) => {
    try {
        const response = await getCompaniesQuery()
        if(response.length !== 0)res.send(response)
        else res.send('No existen compa#ias registradas')
     } catch (err) {
         httpError(res, err)
     }
}

const createCompany = async ( req, res) => {
    try {
        const { name, city, status, plan_type } = req.body

        //New Company Data for Postman example
        /* 
        {
            "name": "Ronald Corp INC",
            "city": 6050,
            "status": "Active",
            "plan_type": "Business Pro"
        }
        */

        const newCompany ={
            name,
            city,
            status,
            plan_type
        }
        await insertCompany(newCompany)
        res.send('Company inserted')
    } catch (err) {
        httpError(res, err)
    }
}

module.exports = { getCompanies, createCompany}