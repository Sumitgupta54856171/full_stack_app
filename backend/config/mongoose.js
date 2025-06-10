const mongoose =require('mongoose');
const uri = process.env.uri;
console.log(uri);


function connnectdb(){

    mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}
module.exports = connnectdb;