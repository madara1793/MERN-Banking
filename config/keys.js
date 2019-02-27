require('dotenv').config();

module.exports = {
    mongoURI: MONGODB_URI,
    secretOrKey: process.env.SECRET_KEY
};