require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_URI,
    secretOrKey: process.env.SECRET_KEY
};