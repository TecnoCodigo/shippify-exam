const mysql = require('mysql');
const { promisify } = require('util')

const database ={ 
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
}

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Conexion perdida con la base de datos')
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Base de datos tiene demasiadas conexiones')
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('Conexion rechazad con la base de datos')
        }
        if(err.code === 'ER_ACCESS_DENIED_ERROR'){
            console.error('Credenciales de la base de datos invalidos')
        }
    }

    if(connection)connection.release();
    console.log('Base de datos conectada')
    return;
});


//Pool Query con promesas
pool.query = promisify(pool.query)

module.exports = pool;