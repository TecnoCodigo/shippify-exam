const db = require('../../config/dbConection')

const getDriversQuery = async () =>{
    return await db.query('SELECT * FROM driver');
 }


const insertDriver = async (newDriver) => {
    await db.query('INSERT INTO driver set ?' , [newDriver]);
}

module.exports = { getDriversQuery, insertDriver }