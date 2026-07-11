const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
require('./connection.js');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173" 
}))

const UserRoutes = require('./routes/user');
const PostRoutes = require('./routes/post');
const NotificationRoutes = require('./routes/notification');
const CommentRoutes = require('./routes/comment');
const ConversationRoutes = require('./routes/conversation');
const MessageRoutes = require('./routes/message');

app.use('/api/auth', UserRoutes);
app.use('/api/post', PostRoutes);
app.use('/api/notification', NotificationRoutes);
app.use('/api/comment', CommentRoutes);
app.use('/api/conversation', ConversationRoutes);
app.use('/api/message', MessageRoutes);

app.listen(PORT, (req,res)=>{
    console.log(`server is running on port ${PORT}`)
})