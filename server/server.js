const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

app.use('/', (req, res)=>{
    res.send("Hello");
})

app.listen(8000,()=>{
    console.log("Server Started");
})

mongoose.connect('mongodb://localhost:27017/userAuth', ()=>{
    console.log("DB connected successfully");
})