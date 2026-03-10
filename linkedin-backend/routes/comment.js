const express = require('express');
const Authentication = require('../authentication/auth');
const router = express.Router();
const CommentController = require('../controller/comment');


router.post('/', Authentication.auth, CommentController.commentPost);

router.get('/:postId', CommentController.getCommentByPostId);



module.exports = router;