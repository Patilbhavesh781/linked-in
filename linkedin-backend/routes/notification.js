const express = require('express');
const Authentication = require('../authentication/auth');
const router = express.Router();
const NotificationController = require('../controller/notification');


//get Notifications
router.get('/', Authentication.auth, NotificationController.getNotification);
router.put('/isRead', Authentication.auth, NotificationController.updateRead);
router.get('/activeNotification', Authentication.auth, NotificationController.activeNotify);




module.exports = router;