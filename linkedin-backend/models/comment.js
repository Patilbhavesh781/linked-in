const mongoose = require('mongoose');
const { postMessageToThread } = require('node:worker_threads');

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true
    },
    comment: {
        type: String,
        required: true,
    }
},{timestamps:true});

const CommentModel = mongoose.model('comment',CommentSchema);
module.exports = CommentModel;