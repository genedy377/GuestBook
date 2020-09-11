const express = require('express');
const http = require('http') 
const db = require('./config/database');
// const user = require('./routes/user');
const path = require('path')
const mongoose = require('mongoose') ;
const app = express()
const messageRoute = require('./routes/api/message')



mongoose.connect(db.url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(console.log('connected')).catch(err => handleError(err));

const publicDirectoryPath = path.join(__dirname,'./view')
app.use(express.static(publicDirectoryPath))
app.use(express.json());

app.use('/api/messages' , messageRoute)
const port = process.env.PORT || 4000;
app.listen(port , ()=>{
    console.log('Server is on Port ' + port ) ; 
})

