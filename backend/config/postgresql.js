const {Pool} = require('pg');
pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'12345687',
    port:5432
})
pool.connect()
.then(()=>{
    console.log('connected to postgresql');
})
.catch((error)=>{
    console.log(error,"of the postgresql");
})
module.exports = pool;