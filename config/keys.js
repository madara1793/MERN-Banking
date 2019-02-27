require('dotenv').config();

module.exports = {
    mongoURI: 'mongodb://kamil:polska12@ds157964.mlab.com:57964/users',
    secretOrKey: process.env.SECRET_KEY
};