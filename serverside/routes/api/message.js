const express = require('express')
const Message = require('.././../models/message')

const router = new express.Router()


router.get('/', async (req, res) => {
    try {
      const messages = await Message.find();
      if (!messages) throw Error('No mesages');
  
      res.status(200).json(messages);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

  router.post('/', async (req, res) => {
    const newMessage = new Message({
        content: req.body.content
    });
  
    try {
      const message = await newMessage.save();
      if (!message) throw Error('Something went wrong saving the message');
  
      res.status(200).json(message);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const message = await Message.findById(req.params.id);
      if (!message) throw Error('No item found');
  
      const removed = await message.remove();
      if (!removed)
        throw Error('Something went wrong while trying to delete the item');
  
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ msg: e.message, success: false });
    }
  });

module.exports = router ; 