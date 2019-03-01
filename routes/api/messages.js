const express = require('express');
const router = express.Router();


//Message model
const Message = require('../../models/Message');

//  @route    GET api/messages
//  @desc     Get all messages
//  @access   private
router.get('/', (req, res) => {
    Message
        .find()
        .sort({date: -1})
        .then(message => res.json(message))
})


//  @route    POST api/messages
//  @desc     Post a message
//  @access   private
router.post('/', (req, res) => {
    const newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        select: req.body.select,
        message: req.body.message
    })
    newMessage
        .save()
        .then(message => res.json(message))

})

module.exports = router;