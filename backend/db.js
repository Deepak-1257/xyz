const mongoose = require('mongoose');

 const mongoURI ="mongodb+srv://deepak1257:deepak1257@cluster0.qplcysb.mongodb.net/Notebook" ;
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully ");
    })
}
module.exports = connectToMongo;