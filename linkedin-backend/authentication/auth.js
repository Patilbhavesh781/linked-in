const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.auth = async (req, res, next)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            res.status(401).json({ error: 'No token, authorization denied' });
        }
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = await User.findById(decode.userId).select('-password');
        next();
        
    }catch(err){
        res.status(400).json({error: 'Token is Not Valid'});
    }
}