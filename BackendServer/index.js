const express = require('express'); 
// const bodyparser = require('body-parser')
// const session = require('express-session');
const db = require('./Config/database');
const user = require('./routes/user');
const message = require('./routes/message');
const mongoose = require('mongoose') ;
mongoose.connect(db.url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).catch(err => handleError(err));

const app = express() ; 
app.use(express.json());
app.use('/users',user); 
app.use('/messages' , message) ; 
const port = process.env.PORT || 4000;

// const myFunction = async () => {
//     const token = jwt.sign({_id :'abcd123'},'this is my new value' , {expiresIn : '1w'});
//     console.log(token);
//     const data = jwt.verify(token , 'this is my new value')
//     console.log(data) ;
// }

// myFunction()

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmQ0OTY0NGNiMjE0MjgzODEzMDc0MSIsImlhdCI6MTU4NDIyMDcxOH0.6z1PxF-otfWN2EwACItc3pTjK-_8awiuOIJwOLqD3c4";
// const decoded = jwt.verify(token , 'ThisismysecretValue');

// const s = User.findOne({_id : decoded._id , 'tokens.token':token});

// console.log(s) ;


app.listen(port , ()=>{
    console.log('Server is on Port ' + port) ; 
})