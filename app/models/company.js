const db = require('../../config/dbConection')

const getCompaniesQuery = async () =>{
   return await db.query('SELECT * FROM company');
}

const insertCompany = async (newCompany) => {
    await db.query('INSERT INTO company set ?' , [newCompany]);
}

module.exports = { getCompaniesQuery, insertCompany }