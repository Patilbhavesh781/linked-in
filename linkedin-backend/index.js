const express = require('express');
require('dotenv').config();
require('./connection.js');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send({
        message:"COngrats Bhavesh PAtil you have selected!"
    })
})

app.listen(PORT, (req,res)=>{
    console.log(`server is running on port ${PORT}`)
})