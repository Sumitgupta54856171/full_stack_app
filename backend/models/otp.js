const mongoose = require('mongoose');
const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    otp:{
        type:String,
        required:true
    },
    expire:{
        type:Date,
        default:Date.now,
        index:{expires:'5m'}    
    }
})
const otpmodel = mongoose.model('otp', otpSchema);