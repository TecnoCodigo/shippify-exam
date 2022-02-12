const httpError = (res, err) => {
    console.error('httpError => ', err)
    res.status(500);
    res.send({ error: 'Ha ocurrido un error inesperado'})

}

module.exports = { httpError }