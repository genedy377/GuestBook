const express = require('express');
const Message = require('../models/message');
const auth = require('../middleware/auth');
const router =  new express.Router()

router.post('/' , auth , async (req,res,next)=>{
    const mess = new Message({
        description:req.body.description,
        owner: req.user._id
    })
    try{
        await mess.save();
        res.status(201).send(mess);
    }catch(e)
    {
        console.log(e);
        res.status(400).send(e);
    }

})

router.get('/',auth, async(req,res,next)=>{
    try {
        await req.user.populate({
            path: 'messages',
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
            }
        }).execPopulate()
        res.status(201).send(req.user.messages);
    } catch (e) {
        res.status(500).send();
    }
});


router.get('/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const message = await Message.findOne({ _id, owner: req.user._id })

        if (!message) {
            return res.status(404).send()
        }

        res.send(message)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const message = await Message.findOne({ _id: req.params.id, owner: req.user._id})

        if (!message) {
            return res.status(404).send()
        }

        updates.forEach((update) => message[update] = req.body[update])
        await message.save()
        res.send(message)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/:id' , auth , async(req,res,next)=>{

    try{
        const message = await Message.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if(!message){
            res.status(404).send()
        }
        else{
            res.status(200).send("Deleted ya basha")
        }
    }catch(e){
        res.status(500).send();
        console.log(e);
    }
})


module.exports = router 