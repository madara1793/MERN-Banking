const express = require('express');
const router = express.Router();


//Transaction model
const Transaction = require('../../models/Transaction');

//  @route    GET api/transactions
//  @desc     Get all transactions
//  @access   private
router.get('/', (req, res) => {
    Transaction
        .find()
        .sort({date: -1})
        .then(transactions => res.json(transactions))
})

//  @route    POST api/transactions
//  @desc     Post a transaction
//  @access   private
router.post('/', (req, res) => {
    const newTransaction = new Transaction({
        accountNumber: req.body.accountNumber,
        name: req.body.name,
        address: req.body.address,
        reference: req.body.reference,
        amount: req.body.amount
    })
    newTransaction
        .save()
        .then(transaction => res.json(transaction))

})

module.exports = router;