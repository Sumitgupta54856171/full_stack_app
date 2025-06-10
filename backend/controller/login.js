const postgresql = require('../config/postgresql')
const jwt = require('jsonwebtoken');
const {setsession} = require('../models/session');
async function login(req,res){
    console.log("login  1");
    const {email, password} = req.body;
    console.log("login called");
    console.log("req.body", req.body);
    const vlaidequery = `SELECT * FROM users WHERE  email = $1 AND password =$2 `;
    const values = [email, password];
   const checkuser = await  postgresql.query(vlaidequery, values)
   console.log("checkuser", checkuser.rows);
    if(!checkuser.rows.length > 0){
        console.log("user not exist");
        res.json({message: "Login successful", user: checkuser.rows[0]});
    }
    
    payload = {
        id: checkuser.rows[0].id,
        email: checkuser.rows[0].email,
        username: checkuser.rows[0].username
        
    }
    const jwtsecret = "hello"
    const token = jwt.sign(payload,jwtsecret, { expiresIn: 60*60*24*7 });
  res.cookie('userdata', token, {
        httpOnly: true,
        secure:jwtsecret,
        maxAge: 30*24*60*60*1000,
    });
  
   console.log("token",token);
   setsession(checkuser.rows[0].username, payload);
   console.log("user exist");
   res.json({message: "Login successful", user: checkuser.rows[0]});
   
}
function logout(req,res){

console.log("logout called");

   res.clearCookie('user');
   console.log("cookie cleared");
}
module.exports = { login, logout };
