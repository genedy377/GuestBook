const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    content:{
        type:String , 
        required:true 
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model('message' , messageSchema) ; 

module.exports = Message ; 