const postgresql = require('../config/postgresql')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const {setsession} = require('../models/session');
async function login(req,res){
    console.log("login  1");
    const {email, password} = req.body;
    console.log("login called");
    console.log("req.body", req.body);
    const vlaidequery = `SELECT * FROM users WHERE  email = $1  `;
    const values = [email];
   const checkuser = await  postgresql.query(vlaidequery, values)
   const userexist = checkuser.rows[0];
   console.log("checkuser", checkuser.rows[0]);
   const ismatch = await bcrypt.compare(password, userexist.password)
   if(ismatch){
 
    console.log("checkuser", checkuser.rows);
   const payload = {
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
        console.log("user exist");
        
          setsession(checkuser.rows[0].username, payload);
    
  
   } else{
       console.log("password not match");
       res.status(401).json({message: "Invalid credentials"});
   }
   console.log("userexist", userexist);
   res.json({message: "Login successful", user: userexist});
}
function logout(req,res){

console.log("logout called");

   res.clearCookie('user');
   console.log("cookie cleared");
}
module.exports = { login, logout };
