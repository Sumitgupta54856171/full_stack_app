const bcrypt = require('bcryptjs');
const postgresql = require('../config/postgresql');
async function signup(req,res){
    console.log("signup called");
    console.log("req.body", req.body);
    const {email,username,password}= req.body;
    const exitemail = `SELECT * FROM users WHERE email = $1`;
    const values = [email]; 
    const emailcheck = await postgresql.query(exitemail, values)
    
    if(emailcheck.rows.length > 0){
        res.status(400).json({error: "Email already exists"});
    console.log("email exist already")
    }else{
        const hashedPassword = await bcrypt.hash(password, 10);
           console.log("email not exist")
            const insertQuery = `INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *`;
            const insertValues = [email, username, hashedPassword];   
            postgresql.query(insertQuery, insertValues)
            .then(user => {
                console.log("user created", user);
            })
            console.log("user created");
            res.json({email:email,message: "Signup successful"});
    }   
    
}

module.exports = {signup};