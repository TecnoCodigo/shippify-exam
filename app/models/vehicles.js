const db = require('../../config/dbConection')

const getVehiclesQuery = async () =>{
    return await db.query('SELECT * FROM vehicle');
}

const getVehicleByDriverQuery = async (id) =>{
   return await db.query('SELECT * FROM vehicle WHERE driver_id = ?', [id]);
}

const insertVehicle = async (newVehicle) => {
    return await db.query('INSERT INTO vehicle set ?' , [newVehicle]);
}

const updateOneVehicle = async (newVehicle, id) => {
    await db.query('UPDATE vehicle set ? WHERE id =  ?' , [newVehicle, id]);
}

const deleteOneVehicle = async (id) => {
    await db.query('DELETE FROM vehicle WHERE id =  ?' , [id]);
}

module.exports = {getVehiclesQuery, getVehicleByDriverQuery, insertVehicle, updateOneVehicle, deleteOneVehicle }