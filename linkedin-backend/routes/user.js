const express = require('express');
const UserController = require('../controller/user');
const Authentication = require('../authentication/auth');
const router = express.Router();


router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/google', UserController.loginThroughGmail);

router.put('/update', Authentication.auth,UserController.updateUser);
router.get('/user/:id', UserController.getProfileById);
router.post('/logout',Authentication.auth,UserController.logout);

router.get('/self', Authentication.auth, (req, res)=>{
    return res.status(200).json({
        user: req.user
    })
})

module.exports = router;