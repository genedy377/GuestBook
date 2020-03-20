const mongoose = require('mongoose') ; 
const schema = new mongoose.schema({
    description:{
        type : String , 
        Date : new Date()
    },
    owner :{
        type:mongoose.Schema.Types.ObjectId , 
        ref:'User'
    },
    itsMessage :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }

}) ; 

const Reply = new mongoose.model('Reply' , schema) ;

module.exports= Reply ; 