
const { count } = require('node:console');
const NotificationModel = require('../models/notification');


exports.getNotification = async(req, res)=>{
    try{
        let ownId = req.user._id;
        let notifications = await NotificationModel.find({ receiver: ownId }).sort({ createdAt: -1 }).populate( "sender receiver" );
        return res.status(200).json({
            message: "Notifications Fetched Successfully",
            notifications: notifications
        })
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'server error', message: err.message });
    }
}

exports.updateRead = async(req, res)=>{
    try{
        const { notificationId } = req.body;
        const notification = await NotificationModel.findByIdAndUpdate(notificationId, {isRead: true});
        if (!notification) {
            return res.status(404).json({ error: 'Notification Not Found' });
        }
        return res.status(200).json({
            message: "Notification Read",
        });

    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'server error', message: err.message });
    }
}

exports.activeNotify = async(req, res)=>{
    try{
        let ownId = req.user.Id;
        let notifications = await NotificationModel.find({ receiver:ownId, isRead:false });

        return res.status(200).json({
            message: "Notification Count Fetched Successfully",
            count: notifications.length
        })


    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'server error', message: err.message });
    }
}