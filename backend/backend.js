const express =require('express')
const postgresql = require('./config/postgresql');
const app = express();
const redis = require('./config/redis');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const controller = require('./controller/login');
const client = require('./config/mongoose');
const cors = require('cors');
const path = require('path');
const jwtverify = require('./controller/jwt');
const bodyParser = require('body-parser');
const signup  =  require('./controller/signup');
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(express.static('views'))
app.post('/api/signup',signup.signup);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','signup.html'));
})
app.post('/api/login',controller.login);
app.get('/api/logout',controller.logout);
app.get('/api/verify',jwtverify.verifyToken)
app.get('/',(req,res)=>{ 
    console.log("hello world")
})
port = process.env.PORT
app.listen(port,()=>{
    console.log(`servers is running on port ${port}`)
    console.log(process.env.uri)
    console.log(process.env.PORT)
    client();
    postgresql;
    redis;
})
