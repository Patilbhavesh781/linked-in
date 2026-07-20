
const MessageModel = require('../models/message');

exports.sendMessage = async(req, res)=>{
    try{
        let { conversation, message, picture } = req.body;
        let addMessage = new MessageModel({ sender:req.user._id, conversation, message, picture });
        await addMessage.save();
        let populatedMessage = await addMessage.populate("sender");
        return res.status(201).json({ message: populatedMessage });

    }catch(err){
        console.log(err);
        res.status(500).json({ error: "server error", message: err.message });
    }
};


exports.getMessage = async(req, res)=>{
    try{
        let { convId } = req.params;
        let messages = await MessageModel.find({
            conversation: convId
        }).populate("sender");
        return res.status(200).json({ messages });

    }catch(err){
        console.log(err);
        res.status(500).json({ error: "server error", message: err.message });
    }
}