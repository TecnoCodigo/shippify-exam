const express = require('express')
const router = express.Router()
const fs = require('fs')
const routerPath = `${__dirname}`

//elimiando extencion del archivo
const removeExtension = (file) =>{
    return file.split('.').shift()
}


fs.readdirSync(routerPath).filter((file) =>{
    const clearName = removeExtension(file)
    const skip = ['index'].includes(clearName)

    if(!skip){
        router.use(`/${clearName}`, require(`./${clearName}`))
        console.log('leyendo =>', clearName)
 
    }
})

router.get('*', (req, res)=> {
    res.status(404)
    res.send({error: 'Recurso no existe'})
} )

module.exports = router