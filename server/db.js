const Pool= require("pg").Pool;
const pool= new Pool({
    user: "postgres",
    password:"Postgres@2022",
    host:"localhost",
    port:5432,
    database:"perntodo"
});

module.exports = pool;
