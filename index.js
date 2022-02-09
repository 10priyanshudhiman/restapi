const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const port = process.env.PORT || 3000;

//Middlewares

app.use(bodyParser.json());
app.use(cors());

const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);



//Routes
app.get('/',(req,res) => {
    res.send("we are at home");

});

// connect to database

mongoose.connect(process.env.MOGO_CONNECTION,{useNewUrlParser: true} ,()=> 
console.log("connected to db")
);




app.listen(port, ()=> console.log("Server is Running"));