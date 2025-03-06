const { createPool } = require('mysql');

export const pool = createPool({
    host: process.env.HOST,
    root: process.env.ROOT,
    password: process.env.PASSWORD,
    database: "ResQHub",
    connectionLimit: 10,
})

pool.query('select * from donations', (err, result, fields) => {
    if(err){
        return console.log(err);
    }
    return console.log(result)
})

module.exports = pool;

