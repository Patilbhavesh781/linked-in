const cookieParser = require('cookie-parser');
const express = require('express');
require('dotenv').config();
require('./connection.js');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

const UserRoutes = require('./routes/user');
const PostRoutes = require('./routes/post');
const NotificationRoutes = require('./routes/notification');

app.use('/api/auth', UserRoutes);
app.use('/api/post', PostRoutes);
app.use('/api/notification', NotificationRoutes);

app.listen(PORT, (req,res)=>{
    console.log(`server is running on port ${PORT}`)
})