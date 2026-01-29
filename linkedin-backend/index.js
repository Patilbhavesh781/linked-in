const cookieParser = require('cookie-parser');
const express = require('express');
const UserRoutes = require('./routes/user');
require('dotenv').config();
require('./connection.js');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', UserRoutes);

app.listen(PORT, (req,res)=>{
    console.log(`server is running on port ${PORT}`)
})