//import dependencias
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
//Variables
const app = express()
const PORT = process.env.PORT
const db = require('./config/dbConection')

//////
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', require('./app/routes'))


//Inicializando
app.listen(PORT, () =>{
    console.log(`API is Running on port: ${PORT}`)
})