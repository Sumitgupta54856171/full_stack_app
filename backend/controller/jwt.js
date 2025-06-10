const jwt = require('jsonwebtoken');
const {getsession} = require('../models/session');
function verifyToken(req, res,next) {
   const token = req.cookies.userdata
   console.log("token", token);
  if(!token){
        return res.status(401).json({error:'No token provided'})
    }
    const jwtsecret = "hello"
        const decoded = jwt.verify(token,jwtsecret);
        console.log('decoded')
        console.log(decoded)
        console.log(decoded.email)
        getsession(decoded.username)
        console.log('sesssion')
        if(!decoded){
            return res.status(401).json({error:'Invalid token'})
        }
        console.log("the data of session is fetch",decoded)
        
        res.json({message: "Token verified successfully", user: decoded});
        next();
}
module.exports = { verifyToken };